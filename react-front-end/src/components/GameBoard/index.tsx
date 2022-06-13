import React from "react";
<<<<<<< HEAD

// styling
import { Container, CssBaseline } from "@mui/material";

// components
=======
import { IGameBoard } from "../../Interfaces";
>>>>>>> 0a6f62d709c887773dd492e2546bcfcd18c3b073
import { GameLobby } from "./GameLobby";

// interfaces
import { IGameBoard } from "../../interfaces/GameBoardInterfaces";

const GameBoard = (props: IGameBoard) => {
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <GameLobby roomId={props.roomId} selectGenre={props.selectGenre}/>
    </Container>
  );
};

export default GameBoard;
