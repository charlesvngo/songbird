import React from "react";
import { ILeaderboardCardProps } from "../Interfaces";
import {
  ListItem,
  Divider,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

const LeaderboardCard = (props: ILeaderboardCardProps) => {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            src={props.user.avatar}
            sx={{ padding: 1, width: 80, height: 80 }}
          />
        </ListItemAvatar>
        <ListItemText
          sx={{ padding: 1 }}
          primary={props.user.username}
          secondary={`Score: ${props.user.score}`}
        />
      </ListItem>
      <Divider />
    </div>
  );
};

export default LeaderboardCard;
