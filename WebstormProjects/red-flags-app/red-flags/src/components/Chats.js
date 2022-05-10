import React from "react";
import "./Chats.css";
import Chat from "./Chat";
import Header from "../Header.js";

function Chats () {
    return (
        <div>
            <Header backButton="/"/>
        <div className="chats">
        <Chat
            name = "Meg"
            message = "Hey"
            timestamp = "1 minute ago"
            />
        <Chat
            name = "Megan"
            message = "Hey dummy"
            timestamp = "1 hour ago"
        />
        <Chat
            name = "Meggy"
            message = "Hey boyo"
            timestamp = "1 hour ago"
        />
        <Chat
            name = "Meghan"
            message = "Sup"
            timestamp = "2 hours ago"
        />
    </div>
        </div>
    );
}
export default Chats;