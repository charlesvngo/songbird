<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
import {ListItem, Divider, ListItemAvatar , ListItemText, Avatar   } from '@mui/material';
import { ILeaderboardCardProps } from '../Interfaces';
>>>>>>> 0a6f62d709c887773dd492e2546bcfcd18c3b073

// styling
import {
  ListItem,
  Divider,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

// interfaces
import { ILeaderboardCardProps } from "../interfaces/LeaderBoardInterfaces";

const LeaderboardCard = (props: ILeaderboardCardProps) => {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            src={props.user.avatar}
            sx={{ padding: 1, width: 70, height: 70 }}
          />
        </ListItemAvatar>
        <ListItemText primary={props.user.username} />
        <ListItemText primary={`Score: ${props.user.score}`} />
      </ListItem>
      <Divider />
    </div>
  );
};

export default LeaderboardCard;
