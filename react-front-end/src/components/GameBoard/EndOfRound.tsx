import React from "react";
import { IEndOfRoundProps, IUser } from "../../Interfaces";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { flexbox } from "@mui/system";

export const EndOfRound = (props: IEndOfRoundProps) => {
  const sortedUsers = props.users.sort(
    (a: IUser, b: IUser): number => b.roundScore - a.roundScore
  );
  const users = sortedUsers.map((user, i) => {
    const bgc = i === 0 && user.roundScore !== 0 ? "#3EA4B4" : "inhert";
    const tc = i === 0 && user.roundScore !== 0 ? "black" : "green";
    return (
      <Box
        sx={{ backgroundColor: bgc, width: "35vw", borderRadius: 2 }}
        key={i}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar
              src={user.avatar}
              sx={{ padding: 1, width: 80, height: 80 }}
            />
          </ListItemAvatar>
          {i === 0 && user.roundScore !== 0 ? (
            <ListItemText
              sx={{ padding: 1, width: "10vw" }}
              primary={
                <Typography variant="h6" style={{ color: tc }}>
                  {user.username}
                </Typography>
              }
            />
          ) : (
            <ListItemText
              sx={{ padding: 1, width: "10vw" }}
              primary={user.username}
            />
          )}
          <ListItemText
            sx={{ padding: 1 }}
            primary={
              <Typography variant="h6" style={{ color: tc }}>
                Score: + {user.roundScore}
              </Typography>
            }
          />
          <Divider />
        </ListItem>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "93vh",
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        sx={{
          mr: 2,
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        END OF ROUND {props.round}
      </Typography>

      <Typography variant="h6" component="h6">
        The song title was:
      </Typography>

      <Typography variant="h5" component="h5">
        {props.track.name}
      </Typography>
      {users}
    </Box>
  );
};
