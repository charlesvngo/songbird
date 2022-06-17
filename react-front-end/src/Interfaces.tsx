import { BoxProps, TypographyProps } from "@mui/material";

export interface IUser {
  id: number;
  username: string;
  roomId: string;
  avatar: string;
  score: number;
  roundScore: number;
  host: boolean;
  winning: boolean;
}

export interface IArtist {
  artist: string;
  id: string;
}

export interface ISocket {
  emit: (
    eventName: string,
    sentData: string | number,
    sentData2?: number,
    sentData3?: string | null
  ) => void;
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

export interface INavProps {
  changeTheme: () => void;
  theme: ITheme;
}
export interface IAudioProps {
  src: string;
}

export interface IGameLobby {
  roomId: string;
  selectGenre: (newGenre: string) => void;
  startGame: (rounds: number) => void;
  host: boolean;
}

export interface IGameBoard extends IGameLobby {
  track: any;
  mode: string;
  endOfRound: () => void;
  audio: any;
  users: IUser[];
  round: number;
  newGame: () => void;
  gameboardTheme: ITheme;
}

export interface IPlayGameProps {
  track: any;
  endOfRound: () => void;
  audio: any;
  round: number;
}

export interface IGameProps {
  user: IUser;
  socket: any;
  setUser: (user: IUser) => void;
  gameboardTheme: ITheme;
}

export interface ILeaderboardProps {
  users: IUser[];
  gameboardTheme: ITheme;
}

export interface ILeaderboardCardProps {
  key: number;
  user: IUser;
  gameboardTheme: ITheme;
}
export interface IEndOfRoundProps {
  users: IUser[];
  track: any;
  round: number;
}
export interface IEndOfGameProps {
  users: IUser[];
  newGame: () => void;
  host: boolean;
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

export interface ITracklist {
  name: string;
  artist: string;
}

export interface IChatboxProps {
  tracklist: ITracklist[];
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
  messages: Imessage[];
  mode: string;
  gameboardTheme: ITheme;
}

export interface IAdvancedSettings {
  selectGenre: (message: string) => void;
}

export interface StyledBoxProps extends BoxProps {
  animate?: boolean;
}

export interface IArtistContext {
  artist: string | null;
  setArtist: (artist: string | null) => void;
  artistList: IArtist[];
  setArtistList: (artistList: IArtist[]) => void;
  queryArtist: (searchParams: string) => void;
}

export interface StyledTypoProps extends TypographyProps {
  animate?: boolean;
}
