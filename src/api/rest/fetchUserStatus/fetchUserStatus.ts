import { fetchData } from 'utils/requests/fetchData';
import { IUserStatusResponse } from './type';

export const fetchUserStatus = (email: string, baseURL: string): Promise<IUserStatusResponse> =>
  fetchData(`${baseURL}/registration`, { queryParameters: { email } });
