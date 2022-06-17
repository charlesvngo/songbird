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

export const EndOfRound = (props: IEndOfRoundProps) => {
  const sortedUsers = props.users.sort(
    (a: IUser, b: IUser): number => b.roundScore - a.roundScore
  );
  const users = sortedUsers.map((user, i) => {
    const bgc = i === 0 && user.roundScore !== 0 ? "#3EA4B4" : "#F4F4FF";
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
              sx={{ padding: 1, width: 50, height: 50 }}
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
              sx={{ padding: 1, width: "10vw", color: "black" }}
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* <Typography variant="h6" component="h6">
          The song title was:
        </Typography>

        <Typography variant="h5" component="h5">
          {props.track.name}
        </Typography> */}

        <Box
          component="img"
          sx={{
            marginRight: 4,
            height: 200,
            width: 200,
            border: 3,
            borderRadius: 2,
          }}
          alt="The house from the offer."
          src={props.track.album.images[0].url}
        />

        <ListItemText
          sx={{ fontSize: 10, padding: 2 }}
          primary={"The song title was:"}
          secondary={props.track.name}
        />
      </Box>
      {users}
    </Box>
  );
};
