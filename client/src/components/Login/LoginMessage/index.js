import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../../../utils/AuthContext';

import './style.css'


const LoginMessage = (props) => {

    const auth = useContext(AuthContext);
    return (

        <div className="content" id="loginMessage">
            <h2>Greetings, <span id="welcomeUser">{auth.user.username}</span></h2>
            <br/><br/>
            <h4>Glad to see you back in one piece. <br/> What's on the agenda for today?</h4>
            <div id="loginLinksDiv">
                <Link className="landingLink" to="/">Report to HQ</Link>
                <Link className="landingLink" to="/agents/all">View All Agents</Link>
            </div>
        </div>
    );
}


export default LoginMessage;