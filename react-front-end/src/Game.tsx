import React, { useState, useEffect } from "react";
import Leaderboard from "./components/LeaderBoard";
import GameBoard from "./components/GameBoard";
import Chatbox from "./components/Chatbox";
import { IUser, ISocket, IGameProps } from "./Interfaces";
import { Box } from "@mui/material";

// modes
const ROUND: string = "ROUND";
const LOBBY: string = "LOBBY";
const COUNTDOWN: string = "COUNTDOWN";
const ENDOFROUND: string = "END_OF_ROUND";

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
  const [tracklist, setTracklist] = useState<string[]>([]);
  const [mode, setMode] = useState<string>(LOBBY);
  const [genre, setGenre] = useState<string>("pop");
  const [audio, setAudio] = useState<any>(document.getElementById("songTrack"));
  const [round, setRound] = useState<number>(0);

  useEffect(() => {
    socket.emit("player-joined", "hi");
  }, []);

  useEffect(() => {
    socket.on("receive-chat-messages", (data: any) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("update-users", (data: [IUser]) => {
      setUsers(data);
    });

    socket.on("game-started", (data: number) => {
      setMode(COUNTDOWN);
    });

    socket.on("round-start", (data: number) => {
      setMode(ROUND);
      setRound(data);
    });

    socket.on("next-round", (data: string) => {
      setMode(COUNTDOWN);
    });

    socket.on("next-track", (data: any) => {
      setTrack(data);
    });

    socket.on("track-list", (data: string[]) => {
      setTracklist(data);
    });
  }, [socket]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${props.user.username}: ${message}`);
    if (mode === ROUND) {
      if (message === track.name) {
        let roundScore: number =
          ((Number(audio.duration) - Number(audio.currentTime)) * 2000) /
          Number(audio.duration);
        roundScore = Math.round(roundScore * 100) / 100;
        props.setUser({ ...user, score: roundScore });
        socket.emit("correct-answer", roundScore);
        return;
      }
    }
    socket.emit("send-chat-message", message);
  };

  const startGame = (rounds: number) => {
    socket.emit("start-game", genre, rounds);
  };

  const selectGenre = (newGenre: string) => {
    if (newGenre !== "advanced-settings" && newGenre !== null) {
      setGenre(newGenre);
    }
  };

  const endOfRound = () => {
    socket.emit("end-of-round", "end-of-round");
    setMode(ENDOFROUND);
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
          audio={audio}
          endOfRound={endOfRound}
          users={users}
          round={round}
        />
      </Box>
      <Box>
        <Chatbox
          tracklist={tracklist}
          message={message}
          sendMessage={sendMessage}
          setMessage={setMessage}
          messages={messages}
          mode={mode}
        />
      </Box>
    </Box>
  );
};

export default Game;
