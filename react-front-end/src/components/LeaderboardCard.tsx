import React from "react";

// styling
import {
  ListItem,
  Divider,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

// interfaces
import { ILeaderboardCardProps } from "../Interfaces";

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
