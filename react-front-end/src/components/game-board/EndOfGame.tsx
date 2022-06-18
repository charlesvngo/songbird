import React from "react";
import { IEndOfGameProps, IUser } from "../../Interfaces";

// material UI
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
  Typography,
  Button,
} from "@mui/material";

export const EndOfGame = (props: IEndOfGameProps) => {
  const sortedUsers: IUser[] = props.users.sort(
    (a: IUser, b: IUser): number => b.roundScore - a.roundScore
  );

  // displays final scoreboard
  const users: JSX.Element[] = sortedUsers.map((user: IUser, i: number) => {
    let bgc = "#F4F4FF";
    if (i === 2) bgc = "#a6e4ed";
    if (i === 1) bgc = "#7bcedb";
    if (i === 0) bgc = "#3EA4B4";
    const tc = i > 2 ? "black" : "white";

    return (
      <Box
        key={i}
        sx={{
          width: "35vw",
          color: tc,
          backgroundColor: bgc,
          borderRadius: 2,
          margin: 2,
        }}
      >
        <ListItem>
          <ListItemText
            sx={{ padding: 1, width: "2vh", fontSize: 38 }}
            primary={<Typography variant="h6">#{i + 1}</Typography>}
          />
          <ListItemAvatar>
            <Avatar
              src={user.avatar}
              sx={{ padding: 1, width: 80, height: 80 }}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: 1, width: "10vh" }}
            primary={<Typography variant="h6">{user.username}</Typography>}
          />
          <ListItemText
            sx={{ padding: 1, width: "10vh" }}
            primary={<Typography variant="h6">Score: {user.score}</Typography>}
          />
        </ListItem>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "93vh",
        overflow: "scroll",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        sx={{
          mr: 2,
          fontWeight: 700,
          fontSize: 50,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          textShadow: "4px 0px 1px #11AD94",
        }}
      >
        GAME OVER
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {users}
      </Box>
      <Button
        variant="contained"
        size="large"
        disabled={!props.host}
        onClick={props.newGame}
        sx={{ color: "white" }}
      >
        New Game
      </Button>
    </Box>
  );
};
