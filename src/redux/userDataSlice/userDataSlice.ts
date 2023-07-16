import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BaseURL } from 'components/Header/BackEndSwitcher/type';
import { getFromLocalStorage } from 'utils/getFromLocalStorage/getFromLocalStorage';
import { login } from 'api/rest/login/login';
import { refreshTokens } from 'api/rest/refreshTokens/refreshTokens';
import { IAuthUserData, ITokens, IUserDataSlice } from './type';

const accessToken = getFromLocalStorage('accessToken');
const refreshToken = getFromLocalStorage('refreshToken');

export const initialState: IUserDataSlice = {
  accessToken,
  refreshToken,
  baseURL: getFromLocalStorage('baseURL', BaseURL.java),
  error: '',
  isAuthenticated: false,
  isLoading: true,
};

export const loginThunk = createAsyncThunk<ITokens, IAuthUserData>(
  'userDataSlice/login',
  async authData => login(authData, initialState.baseURL),
);

export const refreshTokensThunk = createAsyncThunk<ITokens, string>(
  'userDataSlice/refreshTokens',
  async refreshToken => refreshTokens(refreshToken, initialState.baseURL),
);

export const userDataSlice = createSlice({
  name: 'userDataSlice',
  initialState,
  reducers: {
    setIsAuthenticated(state, { payload }) {
      state.isAuthenticated = payload;
    },
    setIsLoadingAndIsAuthenticated(state, { payload }) {
      state.isLoading = payload.isLoading;
      state.isAuthenticated = payload.isAuthenticated;
    },
    logout(state) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      state.accessToken = '';
      state.refreshToken = '';
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    changeBaseURL(state, { payload }) {
      state.baseURL = payload;
      localStorage.setItem('baseURL', payload);
    },
    setTokens(state, { payload }) {
      localStorage.setItem('accessToken', payload.accessToken);
      localStorage.setItem('refreshToken', payload.refreshToken);
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.isAuthenticated = true;
    },
  },

  extraReducers: builder => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      userDataSlice.caseReducers.setTokens(state, action);
    });
    builder.addCase(loginThunk.rejected, (state, { error }) => {
      state.error = error.message;
    });

    builder.addCase(refreshTokensThunk.fulfilled, (state, action) => {
      userDataSlice.caseReducers.setTokens(state, action);
    });
    builder.addCase(refreshTokensThunk.rejected, (state, { error }) => {
      userDataSlice.caseReducers.logout(state);
    });
  },
});

export default userDataSlice.reducer;
export const { setTokens, logout, changeBaseURL, setIsLoadingAndIsAuthenticated } =
  userDataSlice.actions;
