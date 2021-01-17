import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './SIdebar';

function App() {
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
