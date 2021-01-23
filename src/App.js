import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './SIdebar';
import Pusher from 'pusher-js';
import axios from 'axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {

    axios.get('/messages/sync')
      .then( response => {
        console.log(response.data);
        setMessages(response.data)
      })
  }, [])

  useEffect(() => {
    // Enable pusher logging - don't include this in production
   
    const pusher = new Pusher('230c1ce486dfc6d1a094', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('inserted', (newMessage) => {
      //alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  return (
    <div className="app">
      {/* SideBar */}
      <div className="app__body">
        <Sidebar/>
        <Chat/>
      </div>

      
    </div>
  );
}

export default App;
