import React from "react";
import "./ChatScreen.css";
import Chat from "./Chat";
import Header from "../Header.js";

function Chats () {
    return (
        <div>
            <Header backButton="/"/>
        <div className="chats">
        <Chat
            name = "Megan Fox"
            message = "Hey"
            timestamp = "1 minute ago"
            />
        <Chat
            name = "Mom"
            message = "Don't forget to wear sunscreen!"
            timestamp = "1 hour ago"
        />
        <Chat
            name = "Meggy"
            message = "Do you like cats?"
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