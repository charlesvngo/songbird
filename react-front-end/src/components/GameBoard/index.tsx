import React from "react";
import { GameLobby } from "./GameLobby";
import { Countdown } from "./Countdown";
import { PlayGame } from "./PlayGame";

// styling
import { Container, CssBaseline } from "@mui/material";

// interfaces
import { IGameBoard } from "../../Interfaces";

const GameBoard = (props: IGameBoard) => {
  return (
    <Container>
      <CssBaseline />
      {props.mode === "LOBBY" && (
        <GameLobby
          roomId={props.roomId}
          selectGenre={props.selectGenre}
          startGame={props.startGame}
        />
      )}
      {props.mode === "COUNTDOWN" && <Countdown />}
      {props.mode === "ROUND" && <PlayGame track = {props.track}/>}
    </Container>
  );
};

export default GameBoard;
