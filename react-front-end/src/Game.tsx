import React, { useState, useEffect } from "react";
import { Howl, Howler } from "howler";

// components
import Leaderboard from "./components/LeaderBoard";
import GameBoard from "./components/GameBoard";
import AudioPlayer from "./components/AudioPlayer";
import Chatbox from "./components/Chatbox";
import { Box } from "@mui/material";
import { grid } from "@mui/system";

// interfaces
import { IUser, ISocket, IGameProps, Imessage } from "./Interfaces";
import { Preview } from "@mui/icons-material";
import { AnyAaaaRecord } from "dns";

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
  const [genre, setGenre] = useState<string>("");

  useEffect(() => {
    socket.emit("player-joined", "hi");
    // return socket.disconnect()
  }, []);

  useEffect(() => {
    socket.on("chat-messages", (data: any) => {
      // console.log(data);
      setMessages((prev) => [...prev, data]);
    });

    socket.on("update-users", (data: [IUser]) => {
      console.log(data);
      setUsers(data);
    });

    socket.on("game-started", (data: string) => {
      console.log(data);
      setMode(COUNTDOWN);
      setTimeout(() => {
        setMode(ROUND);
      }, 5000);
    });

    socket.on("new-track", (data: [any]) => {
      console.log(data);
      setTrack(data);
    });
  }, [socket]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${props.user.username}: ${message}`);
    socket.emit("Guess", message);
  };

  const nextRound = () => {
    setMode(COUNTDOWN);
    socket.emit("next-round", "next-round");
    setTimeout(() => {
      setMode(ROUND);
    }, 5000);
  };

  const startGame = () => {
    socket.emit("genre-selected", genre);
    socket.emit("start-game", "start");
    nextRound();
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
      {mode === ROUND && <AudioPlayer src={track.preview_url} />}
    </Box>
  );
};

export default Game;
