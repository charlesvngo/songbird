import { IUser } from "./AppInterfaces";

export interface IUserFormProps {
  createSocket: (username: IUser) => void;
}