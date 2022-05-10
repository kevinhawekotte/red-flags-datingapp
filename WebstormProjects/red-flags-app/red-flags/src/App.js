import React from "react";
import './App.css';
import Header from "./Header.js";
import ProfileCards from "./ProfileCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import SwipingScreen from "./SwipingScreen";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
          <Route path="/chat/:person" element={<ChatScreen/>}>
              {/*<Header backButton="/chat"/>*/}

          </Route>
              <Route path="/chat" element={<Chats/>}>

              </Route>
              <Route path="/" element={<SwipingScreen/>}>

              </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
