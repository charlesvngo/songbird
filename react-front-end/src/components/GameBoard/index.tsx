import { Container, CssBaseline } from "@mui/material";
import React from "react";
import { IGameBoard } from "../../interfaces/GameBoardInterfaces";
import { GameLobby } from "./GameLobby";

const GameBoard = (props: IGameBoard) => {
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <GameLobby roomId={props.roomId} />
    </Container>
  );
};

export default GameBoard;
