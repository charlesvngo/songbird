export interface IUser {
  username: string;
  roomId: string;
  score: number;
  avatar: string;
}

export interface ISocket {
  emit: (eventName: string, sentData: string) => void;
  on: (eventName: string, callback: (message: any) => void) => void;
  disconnect: () => void;
}

export interface ITheme {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
  };
}

export interface IAudioProps {
  src: string;
}

export interface IGameBoard {
  roomId: string;
  selectGenre: (newGenre: string) => void;
  startGame: () => void;
}

export interface IGameProps {
  user: IUser;
  socket: any
}

export interface IGameLobby extends IGameBoard{

}

export interface ILeaderboardProps {
  users: [IUser];
}

export interface ILeaderboardCardProps {
  key: number;
  user: IUser;
}

export interface IUserFormProps {
  createSocket: (username: IUser) => void;
}
 
export interface IGenreSelector {
  selectGenre: (newGenre: string) => void;
}