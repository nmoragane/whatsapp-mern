import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import './styles/Chat.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from 'axios';

function Chat({messages}) {

    const [input, serInput] = useState();

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            messages: input,
            name: "DEMO",
            timestamp: "Just Now",
            received: false,
        });

        setInput("");
    }; //sendMessage
    
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ... </p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            {/* chats */}
            <div className="chat__body">
            {messages.map(message => {
            <p className={`chat__message ${message.received && "chat__reciever"}`}>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">
                        {message.timestamp}
                    </span>
                </p>

            })}

                <p className="chat__message  chat__reciever">
                    <span className="chat__name">Nayomal</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

            </div>

            {/* footer */}
            <div className="chat__footer">
            <IconButton>
                <InsertEmoticonIcon/>
            </IconButton>

            <form>
                <input value={input} type="text" placeholder="Type a message"/>
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>

            <MicIcon/>
            
            </div>

        </div>
    );
}

export default Chat;