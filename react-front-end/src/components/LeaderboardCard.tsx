import React from "react";
import {
  ListItem,
  Divider,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { ILeaderboardCardProps } from "../interfaces/LeaderBoardInterfaces";

const LeaderboardCard = (props: ILeaderboardCardProps) => {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            src={props.user.avatar}
            sx={{ padding: 2, width: 60, height: 60 }}
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
