import React from 'react';
import './styles/Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;