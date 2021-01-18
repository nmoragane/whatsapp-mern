import { Avatar } from '@material-ui/core';
import React from 'react';
import './styles/SidebarChat.css'

function SidebarChat(props) {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    );
}

export default SidebarChat;