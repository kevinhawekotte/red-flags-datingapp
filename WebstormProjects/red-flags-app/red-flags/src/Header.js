import * as React from 'react';
import './Header.css';
//import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Link, useNavigate} from "react-router-dom";

function Header({backButton}){
    const history = useNavigate();
    return (
        <div className='header'>
            {backButton ? (
                <IconButton onClick={() => history(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            ):(
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>
            )}

            <Link to="/">
                <span role="img" aria-label={"red flag"}>🚩 Red Flags 🚩</span>
            </Link>
        <Link to="/chat">
        <IconButton>
            <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
        </Link>
        </div>

    );
}

export default Header;