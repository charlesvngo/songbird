import React from "react";

// styling
import { ListItem, List, Box, Divider } from "@mui/material";

// components
import LeaderboardCard from "./LeaderboardCard";

// interfaces
import { IUser } from "../interfaces/AppInterfaces";
import { ILeaderboardProps } from "../interfaces/LeaderBoardInterfaces";

const Leaderboard = (props: ILeaderboardProps) => {
  const users = props.users.map((user: IUser, i: number) => {
    return <LeaderboardCard key={i} user={user} />;
  });

  return (
    <Box sx={{ width: 300 }}>
      <ListItem>Room ID: {props.users[0].roomId}</ListItem>
      <Divider />
      <List>{users}</List>
    </Box>
  );
};

export default Leaderboard;
