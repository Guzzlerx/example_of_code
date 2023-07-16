import { UserStatusesEnum } from 'constants/userStatuses/userStatuses';

export interface IUserStatusResponse {
  email: string;
  clientStatus: UserStatusesEnum;
}
