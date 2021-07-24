import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'


const NotFound = (props) => {


    return (
        <div className="content" id="notFound">
            <h1>Access Denied.</h1>
            <img src="https://ak.picdn.net/shutterstock/videos/1012970891/thumb/1.jpg" height="300" alt="Access Denied Lock." />
            <h2>We're sorry, but you lack the security clearance necessary for this content, partner.</h2>
            <br/>
            <Link to="/" id="returnToHQ">Return to HQ</Link>
        </div>

    );
}


export default NotFound;