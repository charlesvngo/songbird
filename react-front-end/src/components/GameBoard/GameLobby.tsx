import React, { useState } from "react";
import GenreSelector from "./GenreSelector";
import { IGameLobby } from "../../Interfaces";
import { RoundaboutRightSharp } from "@mui/icons-material";
import {
  Typography,
  Box,
  Button,
  TextField,
  Alert,
  AlertTitle,
  Grow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const GameLobby = (props: IGameLobby) => {
  console.log(props);
  const [rounds, setRounds] = useState<number>(5);
  const [copied, setCopied] = useState<boolean>(false);

  const handleOnAdd = (): void => {
    if (rounds < 10) {
      setRounds(rounds + 1);
    }
  };

  const handleOnSubtract = (): void => {
    if (rounds > 1) {
      setRounds(rounds - 1);
    }
  };

  const handleCopyClick = (): void => {
    navigator.clipboard.writeText(`http://localhost:3000/?${props.roomId}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Grow in={true} {...{ timeout: 1000 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "93vh",
        }}
      >
        {props.host && <GenreSelector selectGenre={props.selectGenre} />}
        {props.host && (
          <Typography component="h3" variant="h5" m={2}>
            Rounds
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {props.host && (
            <RemoveIcon fontSize="large" onClick={handleOnSubtract} />
          )}
          {props.host && (
            <Typography component="h3" variant="h5" m={2}>
              {rounds}
            </Typography>
          )}
          {!props.host && (
            <Typography component="h3" variant="h5" m={2}>
              Waiting for the host to begin game...
            </Typography>
          )}
          {props.host && <AddIcon fontSize="large" onClick={handleOnAdd} />}
        </Box>
        <Typography>Share the room code to invite people to join</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: 2,
          }}
        >
          <TextField id="room-id" label={props.roomId} size="small" disabled />
          <Button
            sx={{ marginLeft: 1 }}
            variant="contained"
            size="large"
            onClick={handleCopyClick}
          >
            Copy
          </Button>
        </Box>
        {copied && (
          <Alert severity="success">
            <AlertTitle>Link Copied</AlertTitle>
          </Alert>
        )}
        <Button
          variant="contained"
          size="large"
          onClick={() => props.startGame(rounds)}
          disabled={!props.host}
        >
          Start Game
        </Button>
      </Box>
    </Grow>
  );
};
