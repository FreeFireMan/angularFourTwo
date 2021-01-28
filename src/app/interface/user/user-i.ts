import {IUserAddress} from './i-user-address';

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IUserAddress;
}
