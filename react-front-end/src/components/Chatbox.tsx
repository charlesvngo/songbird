import React, { useState, useEffect } from "react";
import { IUser, ISocket } from "../interfaces/AppInterfaces";
import { IChatboxProps } from "../interfaces/ChatboxInterfaces";
import { Box } from "@mui/material";

const Chatbox = (props: IChatboxProps) => {
  const socket: ISocket = props.socket;

  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([guess]);

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

    const currentGuesses = [...guesses];
    setGuesses([...currentGuesses, guess]);

    socket.emit("Guess", guess);
  };
  return (
    <Box sx={{ width: 300 }}>
      <div className="message-list">
        <p>{guesses}</p>
      </div>
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
