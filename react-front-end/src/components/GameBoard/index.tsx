import { Container, CssBaseline } from "@mui/material";
import React from "react";
import { IGameBoard } from "../../Interfaces";
import { GameLobby } from "./GameLobby";

const GameBoard = (props: IGameBoard) => {
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <GameLobby roomId={props.roomId} selectGenre={props.selectGenre}/>
    </Container>
  );
};

export default GameBoard;
