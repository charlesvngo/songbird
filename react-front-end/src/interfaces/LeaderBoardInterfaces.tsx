import { IUser } from "./AppInterfaces";

export interface ILeaderboardProps {
  users: [IUser];
}

export interface ILeaderboardCardProps {
  key: number;
  user: IUser;
}