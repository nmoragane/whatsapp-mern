import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './styles/Chat.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chat(props) {
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
                <p className="chat__message">
                    <span className="chat__name">Nayomal</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>



                <p className="chat__message  chat__reciever">
                    <span className="chat__name">Nayomal</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>

        </div>
    );
}

export default Chat;