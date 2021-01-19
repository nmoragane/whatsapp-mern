import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './styles/Chat.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

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

            {/* footer */}
            <div className="chat__footer">
            <IconButton>
                <InsertEmoticonIcon/>
            </IconButton>

            <form>
                <input type="text" placeholder="Type a message"/>
                <button type="submit">Send a message</button>
            </form>

            <MicIcon/>
            
            </div>

        </div>
    );
}

export default Chat;