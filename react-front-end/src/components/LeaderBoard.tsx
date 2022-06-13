import React from 'react';
import { List, Box, Divider } from '@mui/material';
import LeaderboardCard from './LeaderboardCard';
import { IUser } from "../interfaces/AppInterfaces"
import { ILeaderboardProps } from '../interfaces/LeaderBoardInterfaces'

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
      <Divider/>
    <List>
      {users}
    </List>
  </Box>
)
}

export default Leaderboard