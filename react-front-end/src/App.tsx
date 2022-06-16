import React, { useState } from "react";
import "./App.css";
import Game from "./Game";
import NavBar from "./components/NavBar";
import UserForm from "./components/UserForm";
import AudioPlayer from "./components/AudioPlayer";
import { IUser, ISocket, ITheme } from "./Interfaces";
import { lightTheme, darkTheme, partyTheme } from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";

// generates random room id
import { getRoomId } from "./helpers/roomGenerator";
import { dark } from "@mui/material/styles/createPalette";

// socket io client
// import socketIOClient from "socket.io-client";
const socketIOClient = require("socket.io-client");
const ENDPOINT = "/";

const App = () => {
  // grab the window URL and set the Room ID to that url.
  // URL should be formatted as localhost:3000/?[:roomId]
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

  // changes the app's theme
  const changeTheme = (): void => {
    if (theme === lightTheme || partyTheme) {
      setTheme(darkTheme);
      return;
    }

    setTheme(lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar changeTheme={changeTheme} />
      <div className="App">
        <AudioPlayer src={""} />
        {user.username ? (
          <Game user={user} socket={socket} setUser={setUser} />
        ) : (
          <UserForm createSocket={createSocket} />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
