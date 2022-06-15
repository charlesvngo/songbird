import React from "react";

// styling
import { List, Box, Divider, Typography, Grow } from "@mui/material";

// components
import LeaderboardCard from "./LeaderboardCard";

// interfaces
import { IUser, ILeaderboardProps } from "../Interfaces";

const Leaderboard = (props: ILeaderboardProps) => {
  const users = props.users.map((user: IUser, i: number) => {
    return <LeaderboardCard key={i} user={user} />;
  });

  return (
    <Grow in={true} {...{ timeout: 1000 }}>
      <Box
        sx={{
          border: 3,
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
        <Divider />
        <List>{users}</List>
      </Box>
    </Grow>
  );
};

export default Leaderboard;
