import React from "react";
import { IEndOfRoundProps, IUser } from "../../Interfaces";
import { ListItem, ListItemAvatar, Avatar, Divider, ListItemText, Typography, Box } from "@mui/material";

export const EndOfRound = (props: IEndOfRoundProps) => {

  const sortedUsers = props.users.sort((a: IUser,b: IUser) : number => b.roundScore - a.roundScore)
  const users = sortedUsers.map((user, i) => {
    const bgc = (i === 0 && user.roundScore !== 0) ? "#3EA4B4" : "inhert"
    const tc = (i === 0 && user.roundScore !== 0) ? "black" : "green"
    return (
      <Box sx={{ backgroundColor: bgc, width:"35vh" }}>
        <ListItem >
          <ListItemAvatar>
            <Avatar
              src={user.avatar}
              sx={{ padding: 1, width: 80, height: 80 }}
            />
          </ListItemAvatar>
          {(i === 0 && user.roundScore !== 0) ? <ListItemText
            sx={{ padding: 1 }}
            primary={<Typography variant="h6" style={{ color: tc }}>
           {user.username}
          </Typography>}
          />: <ListItemText
          sx={{ padding: 1 }}
          primary={user.username}
        />}
            <ListItemText
            sx={{ padding: 1 }} 
            // primary={`Score: + ${user.roundScore}`}
            primary={<Typography variant="h6" style={{ color: tc }}>
            Score: + {user.roundScore}
          </Typography>}
          />
        </ListItem>
        <Divider />
      </Box>
    );
  });

  
  return (
    <>
      <h1>End of Round {props.round}</h1>
      <h3>The song title was:</h3>
      <h3>{props.track.name} </h3>
      {users}
    </>
  );
};
