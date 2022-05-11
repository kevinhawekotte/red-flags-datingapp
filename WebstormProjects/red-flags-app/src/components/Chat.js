import React from "react";
import "./Chat.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";

function Chat({name, message, timestamp}) {
    return (
        <Link to={'/chat/${name}'}>
        <div className="chat">
            <AccountCircleIcon className="chat__image"/>
        <div className="chat__details">
        <h2>{name}</h2>
        <p>{message}</p>
        </div>
            <p className="chat__timestamp">{timestamp}</p>
        </div>
        </Link>
    );
}
export default Chat;