import { fetchData } from 'utils/requests/fetchData';

export const recoverPassword = (
  email: string,
  newPassword: string,
  baseURL: string,
): Promise<void> =>
  fetchData(`${baseURL}/login/password`, {
    method: 'PATCH',
    headers: [['Content-Type', 'application/json']],
    queryParameters: { email },
    body: JSON.stringify({
      newPassword,
    }),
  });
