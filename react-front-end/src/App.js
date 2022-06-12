import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import AudioPlayer from "./AudioPlayer";
import UserForm from "./components/UserForm";
import Game from "./Game";

// socket io client
import socketIOClient from "socket.io-client";
const ENDPOINT = "/";

const App = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState({})
  const [state, setState] = useState({
    message: "Click the button to load data!",
    src: "",
  });

  const fetchData = () => {
    axios.get("/api/data").then((response) => {
      // handle success
      console.log(response.data);
      setState({
        ...state,
        src: response.data.src,
      });
    });
  };

  const createSocket = (user, roomId) => {
    setSocket(socketIOClient(ENDPOINT, {
      query: { username: user, roomId: roomId }
      
    }));
    setUsername(user);
  };

  return (
    <div className="App">
      <h1>{state.message}</h1>
      <button onClick={fetchData}>Fetch Music Data</button>

      {state.src && <AudioPlayer src={state.src} />}

      {username ? (
        <Game username={username} socket={socket} />
      ) : (
        <UserForm setUserName={setUsername} createSocket={createSocket} />
      )}
    </div>
  );
};

export default App;