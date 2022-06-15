export interface IUser {
  username: string;
  roomId: string;
  score: number;
  roundScore: number;
  avatar: string;
}

export interface ISocket {
  emit: (eventName: string, sentData: string | number, sentData2?: number) => void;
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
  startGame: (rounds: number) => void;
}

export interface IGameBoard extends IGameLobby {
  track: any;
  mode: string;
  endOfRound: () => void;
  audio: any;
  users: IUser[];
  round: number;
}

export interface IPlayGameProps {
  track: any;
  endOfRound: () => void;
  audio: any;
}

export interface IGameProps {
  user: IUser;
  socket: any;
  setUser: (user: IUser) => void;
}

export interface ILeaderboardProps {
  users: IUser[];
}

export interface ILeaderboardCardProps {
  key: number;
  user: IUser;
}
export interface IEndOfRoundProps{
  users: IUser[];
  track: any
  round: number;
}
export interface IEndOfGameProps{
  users: IUser[];
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
