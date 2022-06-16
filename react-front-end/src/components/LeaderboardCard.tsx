import React, { useRef } from "react";
import { ILeaderboardCardProps } from "../Interfaces";
import {
  ListItem,
  Divider,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Slide,
} from "@mui/material";
import { Box } from "@mui/system";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const LeaderboardCard = (props: ILeaderboardCardProps) => {
  const containerRef = useRef(null);
  const bgc = props.user.host ? "#F4F4FF" : "inhert"
  return (
    <Slide direction="right" in={true} container={containerRef.current}>
      <Box sx={{ backgroundColor: bgc}}>
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
          {props.user.winning && (
            <EmojiEventsIcon fontSize="large" sx={{ color: " #FFD700" }} />
          )}
        </ListItem>
        <Divider />
      </Box>
    </Slide>
  );
};

export default LeaderboardCard;
