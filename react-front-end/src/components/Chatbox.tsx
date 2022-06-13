import React, { useState, useEffect } from "react";
import { IUser, ISocket } from "../interfaces/AppInterfaces";
import { IChatboxProps } from "../interfaces/ChatboxInterfaces";
import { List, Box, Divider } from "@mui/material";

const Chatbox = (props: IChatboxProps) => {
  const socket: ISocket = props.socket;
  const [guess, setGuess] = useState<string>("");
  const [user, setUser] = useState<IUser>(props.user);
  const [users, setUsers] = useState<[IUser]>([user]);

  useEffect(() => {
    socket.on("chat-messages", (message: string) => {
      console.log(message);
    });
    socket.on("update-users", (message: [IUser]) => {
      console.log(message);
      setUsers(message);
    });
  }, [socket]);

  const sendGuess = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${props.user.username}: ${guess}`);
    socket.emit("Guess", guess);
  };
  return (
    <Box sx={{ width: 300 }}>
      <form onSubmit={(e) => sendGuess(e)}>
        <input
          type="text"
          id="guess"
          placeholder="Enter guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

export default Chatbox;
