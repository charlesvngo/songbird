import React, { useState } from "react";

// styling
import "./App.css";
import { theme } from "./helpers/theme";
import { ThemeProvider } from "@mui/material/styles";

// components
import Game from "./Game";
import NavBar from "./components/NavBar";
import UserForm from "./components/UserForm";
import AudioPlayer from "./components/AudioPlayer";

// interfaces
import { IUser, ISocket } from "./Interfaces";

// generates random room id
import { getRoomId } from "./helpers/roomGenerator";

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
    username: "",
    roomId: roomId,
    score: 0,
    avatar: "",
  });
  const [socket, setSocket] = useState<ISocket | undefined>(undefined);

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

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div className="App">
        <AudioPlayer src ={""} />
        {user.username ? (
          <Game user={user} socket={socket} setUser={setUser}/>
        ) : (
          <UserForm createSocket={createSocket} />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
