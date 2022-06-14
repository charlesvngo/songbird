import React, { useState, useEffect } from "react";

// components
import Leaderboard from "./components/LeaderBoard";
import GameBoard from "./components/GameBoard";
import Chatbox from "./components/Chatbox";
import { Box } from "@mui/material";

// interfaces
import { IUser, ISocket, IGameProps } from "./Interfaces";

// modes
const ROUND: string = "ROUND";
const LOBBY = "LOBBY";
const COUNTDOWN = "COUNTDOWN";

const Game = (props: IGameProps) => {
  const socket: ISocket = props.socket;
  const user = props.user;
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState([
    {
      message: "Welcome to Songbird!",
      username: "",
      avatar: "",
    },
  ]);
  const [users, setUsers] = useState<[IUser]>([user]);
  const [track, setTrack] = useState<any>({});
  const [mode, setMode] = useState<string>(LOBBY);
  const [genre, setGenre] = useState<string>("pop");

  useEffect(() => {
    socket.emit("player-joined", "hi");
    // return socket.disconnect()
  }, []);

  useEffect(() => {
    socket.on("receive-chat-messages", (data: any) => {
      // console.log(data);
      setMessages((prev) => [...prev, data]);
    });

    socket.on("update-users", (data: [IUser]) => {
      console.log(data);
      setUsers(data);
    });

    socket.on("game-started", (data: string) => {
      setMode(COUNTDOWN);
    });

    socket.on("round-start", (data: string) => {
      setMode(ROUND);
    });

    socket.on("next-track", (data: any) => {
      console.log(data);
      setTrack(data);
    });
  }, [socket]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${props.user.username}: ${message}`);
    socket.emit("send-chat-message", message);
  };

  const startGame = () => {
    socket.emit("start-game", genre);
  };

  const selectGenre = (newGenre: string) => {
    setGenre(newGenre);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gap: 0,
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      <Box>
        <Leaderboard users={users} />
      </Box>
      <Box sx={{ gridColumn: "span 2" }}>
        <GameBoard
          roomId={props.user.roomId}
          selectGenre={selectGenre}
          startGame={startGame}
          mode={mode}
          track={track}
        />
      </Box>
      <Box>
        <Chatbox
          message={message}
          sendMessage={sendMessage}
          setMessage={setMessage}
          messages={messages}
        />
      </Box>
    </Box>
  );
};

export default Game;
