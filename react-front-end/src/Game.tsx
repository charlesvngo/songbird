import React, { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler'
import { IUser, ISocket, IGameProps } from './Interfaces';
import Leaderboard from './components/LeaderBoard';
import GameBoard from './components/GameBoard';
import  AudioPlayer from './components/AudioPlayer'

const ROUND = 'ROUND'
const LOBBY = 'LOBBY'
const COUNTDOWN = 'COUNTDOWN'

const Game = (props: IGameProps) => {
  const socket: ISocket = props.socket
  const user = props.user
  const [guess, setGuess] = useState<string>("");
  const [users, setUsers] = useState<[IUser]>([user])
  const [track, setTrack] = useState<any>({}) 
  const [mode, setMode] = useState<string>(LOBBY)
  const [genre, setGenre] = useState<string>("")
  
  useEffect(() => {
    socket.emit('player-joined', 'hi')
    // return socket.disconnect()
  }, []);
  
  useEffect(() => {
    socket.on('chat-messages', (message: string) => {
      console.log(message);
    })
    socket.on('update-users', (message: [IUser]) => {
      console.log(message);
      setUsers(message)
    })
    socket.on('game-started', (message: string) => {
      console.log(message);
      setMode(COUNTDOWN);    
      setTimeout(() =>{
        setMode(ROUND)
      }, 5000)
    })

    socket.on('new-track',(message: [any]) => {
      console.log(message);
      setTrack(message);
    })

  }, [socket]);

  const sendGuess = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${props.user.username}: ${guess}`)
    socket.emit('Guess', guess);
  }
  const nextRound = () => {
    setMode(COUNTDOWN); 
    socket.emit("next-round", 'next-round');
    setTimeout(() =>{
      setMode(ROUND)
    }, 5000)
  }
  const startGame = () => {
    socket.emit("start-game", 'start');
    nextRound()
  }

  const selectGenre = (newGenre: string): void => {
    setGenre(newGenre)
    socket.emit("genre-selected", newGenre);
  }
  
  return(
    <>
      <h2> THE GAME </h2>
      <GameBoard roomId={props.user.roomId} selectGenre={selectGenre}/>
      <form onSubmit = {(e) => sendGuess(e)}>
        <input 
          type='text'
          id='guess' 
          placeholder='Enter guess'
          value={guess}
          onChange={(e) => setGuess(e.target.value)}/>
        <button type="submit">
          Submit
        </button>
      </form>
      <button onClick={startGame}>Start</button>
      <button onClick={() => selectGenre("pop")} >POP</button>
      <Leaderboard users = {users}/>
      {mode === ROUND && <AudioPlayer src={track.preview_url} />}

    </>
  )
}
export default Game