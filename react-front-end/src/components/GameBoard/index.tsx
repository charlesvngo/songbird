import React from "react";
import { GameLobby } from "./GameLobby";
import { Countdown } from "./Countdown";
import { PlayGame } from "./PlayGame";
import AudioPlayer from "../AudioPlayer";
import { EndOfRound } from "./EndOfRound";

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
      {props.mode === "ROUND" && <PlayGame track = {props.track} endOfRound = {props.endOfRound} audio = {props.audio}/>}
      {props.mode === "END_OF_ROUND" && <EndOfRound />}
    </Container>
  );
};

export default GameBoard;
