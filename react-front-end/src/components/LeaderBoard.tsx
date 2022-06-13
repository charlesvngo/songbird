import React from 'react';
import { ListItem, List, Box, Divider } from '@mui/material';
import LeaderboardCard from './LeaderboardCard';
import { IUser, ILeaderboardProps } from '../Interfaces';

const Leaderboard = (props: ILeaderboardProps) => {

const users = props.users.map( (user: IUser, i: number) => {
  return (
  <LeaderboardCard 
    key = {i}
    user = {user}
    />
  )
})

return(
  <Box
    sx={{width: 300 }}>
      <ListItem>Room ID: {props.users[0].roomId}</ListItem>
      <Divider/>
    <List>
      {users}
    </List>
  </Box>
)
}

export default Leaderboard