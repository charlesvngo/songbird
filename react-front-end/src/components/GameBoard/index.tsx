import React from "react";
import { GameLobby } from "./GameLobby";

// styling
import { Container, CssBaseline } from "@mui/material";

// interfaces
import { IGameBoard } from "../../Interfaces";

const GameBoard = (props: IGameBoard) => {
  return (
    <Container>
      <CssBaseline />
      <GameLobby 
      roomId={props.roomId} 
      selectGenre={props.selectGenre}
      startGame = {props.startGame} />
    </Container>
  );
};

export default GameBoard;
