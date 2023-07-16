import { selectBaseURL, selectIsAuthenticated } from 'redux/selectors';
import { RootState } from 'redux/store';
import { IUserDataSlice } from 'redux/userDataSlice/type';

const user: IUserDataSlice = {
  accessToken: '',
  refreshToken: '',
  baseURL: 'BaseURL.java',
  error: '',
  isAuthenticated: true,
  isLoading: false,
};

describe('selectors', () => {
  it('should select isAuthenticated', () => {
    const result = selectIsAuthenticated({ user } as RootState);

    expect(result).toBe(true);
  });

  it('should select base URL', () => {
    const result = selectBaseURL({ user } as RootState);

    expect(result).toBe('BaseURL.java');
  });
});
