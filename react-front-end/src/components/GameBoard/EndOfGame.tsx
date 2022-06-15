import React from "react";
import { IEndOfGameProps, IUser } from "../../Interfaces";
import { ListItem, ListItemAvatar, Avatar, Divider, ListItemText, Typography } from "@mui/material";

export const EndOfGame = (props: IEndOfGameProps) => {

  const sortedUsers = props.users.sort((a: IUser,b: IUser) : number => b.roundScore - a.roundScore)
  const users = sortedUsers.map((user, i) => {
    return (
      <div>
        <ListItem sx={{ backgroundColor: "inherit" }}>
          <ListItemAvatar>
            <Avatar
              src={user.avatar}
              sx={{ padding: 1, width: 80, height: 80 }}
            />
          </ListItemAvatar>
          {(i === 0 && user.roundScore !== 0) ? <ListItemText
            sx={{ padding: 1, backgroundColor: "black" }}
            primary={<Typography variant="h6" style={{ color: "green" }}>
           {user.username}
          </Typography>}
          />: <ListItemText
          sx={{ padding: 1 }}
          primary={user.username}
        />}
            <ListItemText
            sx={{ padding: 1 }} 
            // primary={`Score: + ${user.roundScore}`}
            primary={<Typography variant="h6" style={{ color: "green" }}>
            Score: + {user.roundScore}
          </Typography>}
          />
        </ListItem>
        <Divider />
      </div>
    );
  });

  
  return (
    <>
      <h1>End of Game</h1>
      {users}
    </>
  );
};
