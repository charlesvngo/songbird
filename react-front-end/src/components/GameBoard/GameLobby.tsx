import { Typography, Box, Button, TextField } from "@mui/material";
import React from "react";
import GenreSelector from "./GenreSelector";

export const GameLobby = () => {
  return (
    <>
      <GenreSelector />
      <Typography>Rounds</Typography>
      <Box>
        <Button variant="contained">+</Button>
        5
        <Button variant="contained">-</Button>
      </Box>
      <Typography>Share the room code to invite people to join</Typography>
      <Box>
        <TextField id="filled-basic" label="Room ID Here" size="small" disabled/>
        <Button variant="contained" size="large">Copy</Button>
      </Box>
      <Button variant="contained" size="large">Start Game</Button>
    </>
  );
}