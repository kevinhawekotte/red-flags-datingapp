import React, {useState} from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
import Header from "../Header";
function ChatScreen(){
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Megan',
            message:'Hey there!'
        },
        {
            message:'Hey there!'
        },
        {
            name: 'Megan',
            message:'Do you like cats???'
        },

    ])
    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput('');
    };
    return(
        <div>
        <Header backButton="/chat"/>
        <div className="chatScreen">
             <h2>Red Flags Chat</h2>
            <p className="chatScreen__timestamp">
                YOU MATCHED WITH MEGAN ON 5/5/22
            </p>
            {messages.map((message) => (
                message.name ?
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt = {message.name}
                            />
                            <p className="chatScreen__text">{message.message}</p>
                    </div>
                     :
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message} </p>
                        </div>

                ))}

                    <form className="chatScreen__input">
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            className="chatScreen__inputField"
                            placeholder="Type a message..."
                            type="text" />
                        <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                    </form>
        </div>
            </div>
    );
}
export default ChatScreen;