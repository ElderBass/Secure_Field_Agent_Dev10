import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'


const ConfirmationMessage = (props) => {


return (

    <div className="content" id="confirmationMessage">
        <h2>Agent <span id="agentName">{props.confirmation.agentName}</span> has been {props.confirmation.action}</h2>
        <Link to="/agents/all" id="confirmationMessageBtn" type="button">OK</Link>
    </div>
);
}


export default ConfirmationMessage;