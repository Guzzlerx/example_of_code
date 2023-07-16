import { fetchData } from 'utils/requests/fetchData';

export const checkIsPassportExists = (passportNumber: string, baseURL: string): Promise<void> =>
  fetchData(`${baseURL}/registration/user-profile/passport-number`, {
    method: 'POST',
    body: JSON.stringify({ passportNumber }),
    headers: [['Content-Type', 'application/json']],
  });
