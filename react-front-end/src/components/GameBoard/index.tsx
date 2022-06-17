import React from "react";
import { GameLobby } from "./GameLobby";
import { Countdown } from "./Countdown";
import { PlayGame } from "./PlayGame";
import { EndOfRound } from "./EndOfRound";
import { EndOfGame } from "./EndOfGame";
import { IGameBoard } from "../../Interfaces";
import { Container, CssBaseline, Box, Grow } from "@mui/material";
import { gameBoardLight } from "../../styles/theme";

const GameBoard = (props: IGameBoard) => {
  const bgc = props.gameboardTheme === gameBoardLight ? "#FFFFFF" : "#121212";

  return (
    <Grow in={true} {...{ timeout: 1000 }}>
      <Container>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            marginBottom: 1,
            padding: 2,
            height: "93vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 2,
            boxShadow: 5,
            backgroundColor: bgc,
          }}
        >
          {props.mode === "LOBBY" && (
            <GameLobby
              roomId={props.roomId}
              selectGenre={props.selectGenre}
              startGame={props.startGame}
              host={props.host}
            />
          )}
          {props.mode === "COUNTDOWN" && <Countdown />}
          {props.mode === "ROUND" && (
            <PlayGame
              track={props.track}
              endOfRound={props.endOfRound}
              audio={props.audio}
              round={props.round}
            />
          )}
          {props.mode === "END_OF_ROUND" && (
            <EndOfRound
              users={props.users}
              track={props.track}
              round={props.round}
            />
          )}
          {props.mode === "END_OF_GAME" && <EndOfGame users={props.users} />}
        </Box>
      </Container>
    </Grow>
  );
};

export default GameBoard;
