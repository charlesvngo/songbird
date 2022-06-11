import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import AudioPlayer from './AudioPlayer';
import { Howl, Howler } from 'howler';
//Socket io client
import socketIOClient from 'socket.io-client';

const ENDPOINT = '/';
const socket = socketIOClient(ENDPOINT);

const App = () => {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [song, setSong] = useState({});
  const [state, setState] = useState({
    message: 'Click the button to load data!',
    src: ''
  });

  useEffect(() => {
    console.log("This useEffect runs only once!")
    socket.on('INITIAL_CONNNECTION', data => {
      setUser(data.name)
      setUsers(data.users)
    })

    socket.on('NEW_USER', data => {
      setUsers(prev => {
        return [...prev, data.name]
      })
    })

    socket.on('DISCONNECTED_USER', data => {
      setUsers(data.users)
    })

  }, [socket]);
  
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
      {/* {state.src && <AudioPlayer src ={state.src}/>} */}
      {user ? <h2>User: {user}</h2> : <h3>Loading...</h3>}
      <ul>
        {users.map(user => <li>{user}</li>)}
      </ul> 
    </div>
  );
}

export default App;