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
