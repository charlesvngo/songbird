import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import AudioPlayer from './AudioPlayer';
import { Howl } from 'howler';
import UserForm from './components/UserForm';
import Game from './Game'

//Socket io client
import socketIOClient from 'socket.io-client';

const ENDPOINT = '/';
let socket = '';

const App = () => {

  const [username, setUsername] = useState('');
  const [tracks, setTracks] = useState([]);
  const [song, setSong] = useState({});
  const [state, setState] = useState({
    message: 'Click the button to load data!',
    src: ''
  });

  const fetchData = () => {
    axios.get('/api/data') 
    .then((response) => {
      // handle success
      setTracks(response.data.tracks
        .filter(track => track.preview_url !== null)
        .map(track => {
        return { 
          title: track.name,
          artist: track.artists,
          src: track.preview_url
        }
      }))
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (tracks[0]) {
      setSong(new Howl({
        src: [tracks.map(track => track.src)],
        html5: true,
        volume: 0.3,
        autoplay: false
      }))
    }
  }, [tracks])

  const handleClick = () => {
    song.play()
    setTimeout(()=>{
      song.fade(0.3, 0, 1000)
    }, 29000)
  }
  const createSocket = (user) => {
    socket = socketIOClient(ENDPOINT, {
      query: `username=${user}`
    });
    setUsername(user);
  }

  return (
    <div className="App">
      <h1>{ state.message }</h1>
      <button onClick={handleClick}>
        Fetch Music Data
      </button>
      <br></br>
      <input type='text' id='username' placeholder='Enter Username'>
      </input>
      <button>
        Submit
      </button>

      {state.src && <AudioPlayer src ={state.src}/>}
      {username ? <Game username = {username} socket = {socket}/> : <UserForm setUserName ={setUsername} createSocket = {createSocket}/>}
      
    </div>
  );
}

export default App;