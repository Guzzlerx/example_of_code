import { ISignupData } from 'routes/Registration/type';
import { fetchData } from 'utils/requests/fetchData';

export const registerBackClient = async (data: ISignupData, baseURL: string) =>
  fetchData(`${baseURL}/registration/user-profile/`, {
    method: 'PATCH',
    headers: [['Content-Type', 'application/json']],
    body: JSON.stringify(data),
  });
