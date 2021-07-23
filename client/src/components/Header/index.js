import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../../utils/AuthContext';


import './style.css'


const Header = (props) => {

    const auth = useContext(AuthContext);

    return (

        <header className="header">
            <h1>
                <Link to="/"><span id="logo">Best Spy</span></Link>
            </h1>
            <ul>
                {auth.user ? <li className="navlink"><p id="welcomeMessage">Logged in as {auth.user.username}</p></li> : null}
                {auth.user ? 
                <li className="navlink">
                    <Link to="/logout"><span id="login">Logout</span></Link>
                </li> : <li className="navlink">
                    <Link to="/login"><span id="login">Login</span></Link>
                </li>}
                {auth.user ? null : <li className="navlink">
                    <Link to="/signup"><span id="register">Sign Up</span></Link>
                </li> }
            </ul>
        </header>
    );
}


export default Header;