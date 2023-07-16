import { ISignupData } from 'routes/Registration/type';
import { fetchData } from 'utils/requests/fetchData';

export const registerNonBackClient = async (data: ISignupData, baseURL: string) =>
  fetchData(`${baseURL}/registration/user-profile/new/`, {
    method: 'POST',
    headers: [['Content-Type', 'application/json']],
    body: JSON.stringify(data),
  });
