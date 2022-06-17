import React, { useState, useEffect, createContext } from "react";
import Leaderboard from "./components/LeaderBoard";
import GameBoard from "./components/game-board";
import Chatbox from "./components/Chatbox";
import {
  IUser,
  ISocket,
  IGameProps,
  ITracklist,
  IArtist,
  IArtistContext,
} from "./Interfaces";
import { Box } from "@mui/material";

// modes
const ROUND: string = "ROUND";
const LOBBY: string = "LOBBY";
const COUNTDOWN: string = "COUNTDOWN";
const ENDOFROUND: string = "END_OF_ROUND";
const EOG: string = "END_OF_GAME";
const cheatCodes = [
  "Never Gonna Give You Up",
  "immacheater",
  "upupdowndownleftrightleftrightbastart",
];

// Context for artist searching
export const ArtistContext = createContext<IArtistContext>(
  {} as IArtistContext
);

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

  const element = document.getElementById("songTrack")!;
  const [audio] = useState<HTMLAudioElement>(element as HTMLAudioElement);
  const [users, setUsers] = useState<[IUser]>([user]);
  const [track, setTrack] = useState<any>({});
  const [tracklist, setTracklist] = useState<[ITracklist] | []>([]);
  const [mode, setMode] = useState<string>(LOBBY);
  const [genre, setGenre] = useState<string>("pop");
  const [round, setRound] = useState<number>(0);
  const [artist, setArtist] = useState<string>("");
  const [artistList, setArtistList] = useState<any[]>([
    { artist: "Migos", id: "test" },
  ]);

  useEffect(() => {
    socket.emit("player-joined", "hi");
  }, []);

  useEffect(() => {
    socket.on("receive-chat-messages", (data: any) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("update-users", (data: [IUser]) => {
      setUsers(data);
      data.forEach((u) => {
        if (u.username === user.username) props.setUser(u);
      });
    });

    socket.on("game-started", (data: number) => {
      setMode(COUNTDOWN);
    });

    socket.on("round-start", (data: number) => {
      setMode(ROUND);
      setRound(data);
    });

    socket.on("next-round", (data: any) => {
      setTrack(data);
      setMode(COUNTDOWN);
    });

    socket.on("next-track", (data: any) => {
      setTrack(data);
    });

    socket.on("end-of-game", (data: string) => {
      setMode(EOG);
    });
    socket.on("start-new-game", (data: string) => {
      setMode(LOBBY);
    });

    socket.on("track-list", (data: ITracklist | any) => {
      setTracklist(data);
    });

    socket.on("artist-list", (data: any) => {
      setArtistList(data);
    });

    return () => socket.disconnect();
  }, [socket]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message === "") return;
    const cheat = cheatCodes.find((m) => m === message);
    console.log(`${props.user.username}: ${message}`);
    if (mode === ROUND) {
      if (message === track.name || cheat) {
        let roundScore: number =
          ((Number(audio.duration) - Number(audio.currentTime)) * 2000) /
          Number(audio.duration);
        roundScore = Math.round(roundScore);
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

  const endOfRound = () => {
    socket.emit("end-of-round", "end-of-round");
    setMode(ENDOFROUND);
  };

  const newGame = () => {
    socket.emit("new-game", "new-game");
  };

  const selectGenre = (newGenre: string) => {
    if (newGenre !== "advanced-settings" && newGenre !== null) {
      setGenre(newGenre);
    }
  };

  const queryArtist = (searchParams: string): void => {
    if (searchParams.length === 0) {
      return;
    }
    socket.emit("search-artist", encodeURIComponent(searchParams));
    return;
  };

  const context: IArtistContext = {
    artist,
    setArtist,
    artistList,
    setArtistList,
    queryArtist,
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
        <Leaderboard users={users} gameboardTheme={props.gameboardTheme} />
      </Box>

      <Box sx={{ gridColumn: "span 2" }}>
        <ArtistContext.Provider value={context}>
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
            host={user.host}
            newGame={newGame}
            gameboardTheme={props.gameboardTheme}
          />
        </ArtistContext.Provider>
      </Box>
      <Box>
        <Chatbox
          tracklist={tracklist}
          message={message}
          sendMessage={sendMessage}
          setMessage={setMessage}
          messages={messages}
          mode={mode}
          gameboardTheme={props.gameboardTheme}
        />
      </Box>
    </Box>
  );
};

export default Game;
