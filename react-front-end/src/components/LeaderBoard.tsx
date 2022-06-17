import React from "react";
import LeaderboardCard from "./LeaderboardCard";
import { IUser, ILeaderboardProps } from "../Interfaces";
import { List, Box, Divider, Typography, Grow } from "@mui/material";
import { gameBoardLight } from "../styles/theme";

const Leaderboard = (props: ILeaderboardProps) => {
  const users = props.users.map((user: IUser, i: number) => {
    return (
      <LeaderboardCard
        key={i}
        user={user}
        gameboardTheme={props.gameboardTheme}
      />
    );
  });

  const bgc = props.gameboardTheme === gameBoardLight ? "#FFFFFF" : "#121212";

  return (
    <Grow in={true} {...{ timeout: 1000 }}>
      <Box
        sx={{
          backgroundColor: bgc,
          borderRadius: 2,
          margin: 1,
          padding: 2,
          height: "93vh",
          boxShadow: 5,
        }}
      >
        <Typography variant="h6" component="h6" align="left">
          Room ID: {props.users[0].roomId}
        </Typography>
        <List>
          <Divider />
          {users}
        </List>
      </Box>
    </Grow>
  );
};

export default Leaderboard;
