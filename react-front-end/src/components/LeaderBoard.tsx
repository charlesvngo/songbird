import React from "react";

// styling
import { ListItem, List, Box, Divider } from "@mui/material";

// components
import LeaderboardCard from "./LeaderboardCard";

// interfaces
import { IUser, ILeaderboardProps } from "../Interfaces";

const Leaderboard = (props: ILeaderboardProps) => {
  const users = props.users.map((user: IUser, i: number) => {
    return <LeaderboardCard key={i} user={user} />;
  });

  return (
    <Box
      sx={{
        border: 3,
        borderRadius: 2,
        margin: 1,
        padding: 2,
        height: "93vh",
      }}
    >
      <ListItem sx={{ fontWeight: 600 }}>
        Room ID: {props.users[0].roomId}
      </ListItem>
      <Divider />
      <List>{users}</List>
    </Box>
  );
};

export default Leaderboard;
