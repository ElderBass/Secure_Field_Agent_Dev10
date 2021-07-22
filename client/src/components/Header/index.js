import React from 'react';
import { Link } from "react-router-dom";


import './style.css'


const Header = (props) => {


    return (

        <header className="header">
            <h1>
                <Link to="/"><span id="logo">Best Spy</span></Link>
            </h1>
            <ul>
                <li className="navlink">
                    <Link to="/login"><span id="login">Login</span></Link>
                </li>
                <li className="navlink">
                    <Link to="/signup"><span id="register">Sign Up</span></Link>
                </li>
            </ul>
        </header>
    );
}


export default Header;