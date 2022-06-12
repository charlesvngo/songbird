import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';


const UserForm = (props) => {  
  const[user, setUser] = useState({
    name: "",
    roomId: "",
  });

  const userNameSubmitted = (e) => {
    console.log("submit")
      e.preventDefault();
      if (user === '') {
        return;
      }
      props.createSocket(user);
  }

  return (
    <div id="user-form">
      <form onSubmit = {userNameSubmitted}>
        <input 
          type='text'
          id='username' 
          placeholder='Enter Username'
          value={user.name}
          onChange={(e) => setUser({...user, name: e.target.value})}/>
          <input 
          type='text'
          id='room-id' 
          placeholder='Enter Room code'
          value={user.roomID}
          onChange={(e) => setUser({...user, roomId: e.target.value})}/>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm