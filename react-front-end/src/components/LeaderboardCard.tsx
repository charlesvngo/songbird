import React, { useRef } from "react";

// styling
import {
  ListItem,
  Divider,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Slide,
} from "@mui/material";

// interfaces
import { ILeaderboardCardProps } from "../Interfaces";
import { Box } from "@mui/system";

const LeaderboardCard = (props: ILeaderboardCardProps) => {
  const containerRef = useRef(null);
  return (
    <Slide direction="right" in={true} container={containerRef.current}>
      <Box>
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
      </Box>
    </Slide>
  );
};

export default LeaderboardCard;
