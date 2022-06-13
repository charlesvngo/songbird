import React, { useState } from "react";
import { Typography, Box, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import GenreSelector from "./GenreSelector";
import { IGameLobby } from "../../interfaces/GameLobbyInterfaces";

export const GameLobby = (props: IGameLobby) => {
  const [rounds, setRounds] = useState<number>(5)

  const handleOnAdd = (): void => {
    if (rounds < 10) {
      setRounds(rounds + 1)
    }
  }

  const handleOnSubtract = (): void => {
    if (rounds > 1) {
      setRounds(rounds - 1)
    }
  }

  return (
    <Box
      sx={{
        marginTop: 3,
        marginBottom: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <GenreSelector />
      <Typography component="h3" variant="h5" p={2}>
        Rounds
      </Typography>
      <Box
        sx={{
          display:"flex",
          alignItems:"center"
        }}
      >
        <RemoveIcon fontSize="large" onClick={handleOnSubtract}/>
        <Typography component="h3" variant="h5" p={2}>
        {rounds}
        </Typography>
        <AddIcon fontSize="large" onClick={handleOnAdd}/>
      </Box>
      <Typography>Share the room code to invite people to join</Typography>
      <Box>
        <TextField
          id="filled-basic"
          label={props.roomId}
          size="small"
          disabled
        />
        <Button variant="contained" size="large">
          Copy
        </Button>
      </Box>
      <Button variant="contained" size="large">
        Start Game
      </Button>
    </Box>
  );
};
