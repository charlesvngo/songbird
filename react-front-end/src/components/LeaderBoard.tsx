import React from 'react';
import { List, ListItem, Divider, Avatar } from '@mui/material';
import LeaderboardCard from './LeacerboardCard';
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
  <div>
    <List>
      {users}
    </List>
  </div>
)
}

export default Leaderboard