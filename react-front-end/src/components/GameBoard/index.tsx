import React from "react";

// styling
import { Container, CssBaseline } from "@mui/material";

// components
import { GameLobby } from "./GameLobby";

// interfaces
import { IGameBoard } from "../../interfaces/GameBoardInterfaces";

const GameBoard = (props: IGameBoard) => {
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <GameLobby roomId={props.roomId} />
    </Container>
  );
};

export default GameBoard;
