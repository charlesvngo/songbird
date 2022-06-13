import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import AudioPlayer from "./components/AudioPlayer";
import UserForm from "./components/UserForm";
import Game from "./Game";
import { theme } from "./util/theme";

import { getRoomId } from "./util/roomGenerator";
import { IUser, ISocket,  } from "./interfaces/AppInterfaces";
import { ThemeProvider } from "@mui/material/styles";

// socket io client
// import socketIOClient from "socket.io-client";
const socketIOClient = require("socket.io-client");
const ENDPOINT = "/";

const App = () => {
  // grab the window URL and set the Room ID to that url. URL should be formatted as localhost:3000/?[:roomId]
  const roomId: string = getRoomId();

  // create a colour palette for the App

  
  const [user, setUser] = useState<IUser>({
    username: "",
    roomId: roomId,
    score: 0,
    avatar: "",
  });
  const [socket, setSocket] = useState<ISocket | undefined>(undefined);

  const fetchData = (): void => {
    axios.get("/api/data").then((response) => {
      // handle success
      console.log(response.data);
    });
  };

  const createSocket = (createUser: IUser): void => {

    const newRoomId = createUser.roomId ? createUser.roomId : user.roomId
    setUser(prev => {
     return { 
       ...prev,
       username: createUser.username,
       roomId: newRoomId,
       avatar: createUser.avatar
      }
    });
    setSocket(socketIOClient(ENDPOINT, {
      query: { username: createUser.username, roomId: newRoomId, avatar: createUser.avatar }
    }));

  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <h1>Fetch tracks and print to console</h1>
        <button onClick={fetchData}>Fetch Music Data</button>

        {state.src && <AudioPlayer src={state.src} />} */}

        {user.username ? (
          <Game user={user} socket={socket} />
        ) : (
          <UserForm createSocket={createSocket} />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
