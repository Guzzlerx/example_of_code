import { fetchData } from 'utils/requests/fetchData';
import { IUserVerificationBody } from './type';

export const fetchVerificationCode = (data: IUserVerificationBody, baseURL: string) =>
  fetchData(`${baseURL}/security/session/verification`, {
    method: 'POST',
    headers: [['Content-Type', 'application/json']],
    body: JSON.stringify(data),
  });
