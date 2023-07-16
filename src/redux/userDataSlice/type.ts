export interface IUserDataSlice {
  accessToken: string;
  refreshToken: string;
  baseURL: string;
  error?: string;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface IAuthUserData {
  login?: string;
  password: string;
  type: typeLoginEnum;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export enum typeLoginEnum {
  email = 'EMAIL',
  passport = 'PASSPORT_NUMBER',
}
