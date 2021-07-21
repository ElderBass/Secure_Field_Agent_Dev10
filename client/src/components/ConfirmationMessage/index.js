import React from 'react';


import './style.css'


const ConfirmationMessage = (props) => {


return (

    <div className="confirmationMessage">
        <h2>Agent "{props.agent.firstName} {props.agent.lastName}" has been {props.action}</h2>
        <button onClick={props.confirm} id="confirmationMessageBtn" type="button">OK</button>
    </div>
);
}


export default ConfirmationMessage;