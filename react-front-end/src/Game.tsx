import React, { useState, useEffect } from "react";
import { IUser, ISocket } from "./interfaces/AppInterfaces";
import { IGameProps } from "./interfaces/GameInterfaces";

import Leaderboard from "./components/LeaderBoard";
import Chatbox from "./components/Chatbox";

import { Box } from "@mui/material";

const Game = (props: IGameProps) => {
  const socket: ISocket = props.socket;
  const [user, setUser] = useState<IUser>(props.user);
  const [users, setUsers] = useState<[IUser]>([user]);

  useEffect(() => {
    socket.emit("player-joined", "hi");
    // return socket.disconnect()
  }, []);

  return (
    <>
      <h2> THE GAME </h2>
      <h3> Room ID: {props.user.roomId}</h3>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Leaderboard users={users} />
        <Chatbox user={user} socket={socket}></Chatbox>
      </Box>
    </>
  );
};
export default Game;
