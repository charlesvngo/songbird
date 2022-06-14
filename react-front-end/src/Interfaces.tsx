export interface IUser {
  username: string;
  roomId: string;
  score: number;
  avatar: string;
}

export interface ISocket {
  emit: (eventName: string, sentData: string) => void;
  on: (eventName: string, callback: (data: any) => void) => void;
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
export interface IGameLobby {
  roomId: string;
  selectGenre: (newGenre: string) => void;
  startGame: () => void;
}

export interface IGameBoard extends IGameLobby {
  track: any;
  mode: string;
}

export interface IGameProps {
  user: IUser;
  socket: any;
}

export interface ILeaderboardProps {
  users: IUser[];
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

export interface Imessage {
  username: string | null;
  message: string;
  avatar: string;
}

export interface IChatboxProps {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
  messages: Imessage[];
}
