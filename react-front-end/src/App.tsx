import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import UserForm from "./components/UserForm";
import Game from "./Game";
import { theme } from "./util/theme";
import { getRoomId } from "./util/roomGenerator";
import { IUser, ISocket } from "./interfaces/AppInterfaces";
import { ThemeProvider } from '@mui/material/styles';

// socket io client
// import socketIOClient from "socket.io-client";
const socketIOClient = require("socket.io-client");
const ENDPOINT = "/";

const App = () => {
  // Grab the window URL and set the Room ID to that url. URL should be formatted as localhost:3000/?[:roomId]
  const roomId: string = getRoomId();
    
  const [user, setUser] = useState<IUser>({
    username: '',
    roomId: roomId,
    score: 0
  });
  const [socket, setSocket] = useState<ISocket | undefined>(undefined)

  const fetchData = (): void => {
    axios.get("/api/data").then((response) => {
      // handle success
      console.log(response.data);
    });
  };

  const createSocket = (user: IUser): void => {
    setUser(prev => {

     const newRoomId = user.roomId ? user.roomId : prev.roomId
      return { 
        ...prev,
        username: user.username,
        roomId: newRoomId
      }
    });
    setSocket(socketIOClient(ENDPOINT, {
      query: { username: user.username, roomId: user.roomId }
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
