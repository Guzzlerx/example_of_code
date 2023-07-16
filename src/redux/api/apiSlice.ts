import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'redux/store';
import { refreshTokensThunk } from 'redux/userDataSlice/userDataSlice';
import { BaseURL } from 'components/Header/BackEndSwitcher/type';
import { RESPONSE_CODES_ENUM } from 'constants/responseCodes/responseCodes';
import { getFromLocalStorage } from 'utils/getFromLocalStorage/getFromLocalStorage';

const baseQuery = fetchBaseQuery({
  baseUrl: getFromLocalStorage('baseURL', BaseURL.java),
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = (getState() as RootState).user;

    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }

    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === RESPONSE_CODES_ENUM.UNAUTHORIZED) {
    const { refreshToken } = (api.getState() as RootState).user;

    if (refreshToken) {
      await api.dispatch(refreshTokensThunk(refreshToken));

      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: builder => ({}),
  tagTypes: ['generalInfo', 'notificationSettings'],
});
