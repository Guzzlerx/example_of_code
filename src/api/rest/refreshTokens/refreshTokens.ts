import { fetchData } from 'utils/requests/fetchData';

export const refreshTokens = (refreshToken: string, baseURL: string) =>
  fetchData(`${baseURL}/login/token`, {
    headers: [['authorization', `Bearer ${refreshToken}`]],
  });
