<<<<<<< HEAD
import React from "react";

// styling
import { ListItem, List, Box, Divider } from "@mui/material";

// components
import LeaderboardCard from "./LeaderboardCard";

// interfaces
import { IUser } from "../interfaces/AppInterfaces";
import { ILeaderboardProps } from "../interfaces/LeaderBoardInterfaces";
=======
import React from 'react';
import { ListItem, List, Box, Divider } from '@mui/material';
import LeaderboardCard from './LeaderboardCard';
import { IUser, ILeaderboardProps } from '../Interfaces';
>>>>>>> 0a6f62d709c887773dd492e2546bcfcd18c3b073

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
