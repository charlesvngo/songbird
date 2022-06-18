import React, { useState } from "react";
import { IUser, ISocket, ITheme } from "./Interfaces";
import Game from "./Game";
import NavBar from "./components/NavBar";
import UserForm from "./components/UserForm";
import AudioPlayer from "./components/AudioPlayer";
import "./App.css";

// material UI
import { ThemeProvider } from "@mui/material/styles";
import {
  lightTheme,
  darkTheme,
  gameBoardLight,
  gameBoardDark,
  navTheme,
} from "./styles/theme";

// generates a room id
import { getRoomId } from "./helpers/roomGenerator";

// socket io client
const socketIOClient = require("socket.io-client");
const ENDPOINT = "/";

const App = () => {
  // grab the window URL and set the Room ID to that url. URL should be formatted as localhost:3000/?[:roomId]
  const roomId: string = getRoomId();

  // create a colour palette for the App
  const [user, setUser] = useState<IUser>({
    id: 0,
    username: "",
    roomId: roomId,
    avatar: "",
    score: 0,
    roundScore: 0,
    host: false,
    winning: false,
  });
  const [socket, setSocket] = useState<ISocket | undefined>(undefined);
  const [theme, setTheme] = useState<ITheme>(lightTheme);
  const [gameboardTheme, setGameboardTheme] = useState<ITheme>(gameBoardLight);

  const createSocket = (createUser: IUser): void => {
    const newRoomId = createUser.roomId ? createUser.roomId : user.roomId;
    setUser((prev) => {
      return {
        ...prev,
        username: createUser.username,
        roomId: newRoomId,
        avatar: createUser.avatar,
      };
    });
    setSocket(
      socketIOClient(ENDPOINT, {
        query: {
          username: createUser.username,
          roomId: newRoomId,
          avatar: createUser.avatar,
        },
      })
    );
  };

  // switches between light and dark mode
  const changeTheme = (): void => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
      setGameboardTheme(gameBoardDark);
      return;
    }
    setTheme(lightTheme);
    setGameboardTheme(gameBoardLight);
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={navTheme}>
        <NavBar changeTheme={changeTheme} theme={theme} />
      </ThemeProvider>
      <div className="App">
        <AudioPlayer src={""} />
        {user.username ? (
          <ThemeProvider theme={gameboardTheme}>
            <Game
              user={user}
              socket={socket}
              setUser={setUser}
              gameboardTheme={gameboardTheme}
            />
          </ThemeProvider>
        ) : (
          <UserForm createSocket={createSocket} />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
