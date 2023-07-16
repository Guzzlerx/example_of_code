import { IAuthUserData, ITokens } from 'redux/userDataSlice/type';
import { fetchData } from 'utils/requests/fetchData';

export const login = async (authData: IAuthUserData, baseURL: string): Promise<ITokens> =>
  fetchData(`${baseURL}/login/`, {
    method: 'POST',
    referrerPolicy: 'no-referrer',
    headers: [['Content-Type', 'application/json']],
    body: JSON.stringify(authData),
  });
