import { fetchData } from 'utils/requests/fetchData';

export const getEmailByPassportNumber = (
  passportNumber: string,
  baseURL: string,
): Promise<{ email: string }> =>
  fetchData(`${baseURL}/security/session`, {
    method: 'POST',
    headers: [['Content-Type', 'application/json']],
    body: JSON.stringify({
      passportNumber,
    }),
  });
