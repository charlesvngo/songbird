import React from "react";
import AudioPlayer from "../AudioPlayer"; // not needed?
import { GameLobby } from "./GameLobby";
import { Countdown } from "./Countdown";
import { PlayGame } from "./PlayGame";
import { EndOfRound } from "./EndOfRound";
import { EndOfGame } from "./EndOfGame";
import { IGameBoard } from "../../Interfaces";
import { Container, CssBaseline, Box, Grow } from "@mui/material";

const GameBoard = (props: IGameBoard) => {

  return (
    <Grow in={true} {...{ timeout: 1000 }}>
      <Container>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            marginBottom: 1,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: 3,
            borderRadius: 2,
            height: "93vh",
          }}
        >
          {props.mode === "LOBBY" && (
            <GameLobby
              roomId={props.roomId}
              selectGenre={props.selectGenre}
              startGame={props.startGame}
            />
          )}
          {props.mode === "COUNTDOWN" && <Countdown />}
          {props.mode === "ROUND" && (
            <PlayGame
              track={props.track}
              endOfRound={props.endOfRound}
              audio={props.audio}
              round = {props.round}
            />
          )}
          {props.mode === "END_OF_ROUND" && <EndOfRound users = {props.users} track = {props.track} round = {props.round}/>}
          {props.mode === "END_OF_GAME" && <EndOfGame users = {props.users}/>}
        </Box>
      </Container>
    </Grow>
  );
};

export default GameBoard;
