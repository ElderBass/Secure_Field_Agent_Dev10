import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../../../utils/AuthContext';


import './style.css'


const SignUpMessage = (props) => {

    const auth = useContext(AuthContext);

    return (
        <div className="content" id="loginMessage">
            <h2>Greetings, <span id="welcomeUser">{auth.user.username}</span></h2>
            <br /><br />
            <h4>Think you're spy enough for us? <br /> We'll see soon enough.</h4>
            <div id="loginLinksDiv">
                <Link className="landingLink" to="/">Report to HQ</Link>
                <Link className="landingLink" to="/agents/all">View All Agents</Link>
            </div>
        </div>

    );
}


export default SignUpMessage;