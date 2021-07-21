import React from 'react';


import './style.css'


const Header = (props) => {


    return (

        <header className="header">
            <h1>
                <a href="#"><span id="logo">Best Spy</span></a>
            </h1>
            <ul>
                <li className="navlink">
                    <a href="#"><span id="login">Login</span></a>
                </li>
                <li className="navlink">
                    <a href="#"
                    ><span id="register">Register</span></a
                    >
                </li>
            </ul>
        </header>
    );
}


export default Header;