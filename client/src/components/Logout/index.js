import React, { useContext } from 'react';
import AuthContext from '../../utils/AuthContext';
import { useHistory, Link } from "react-router-dom";

import './style.css'


const Logout = (props) => {

    const auth = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        history.push("/");
        auth.logout();
    }

    return (
        <div className="content" id="confirmLogout">
            <h2>They on to you, <span id="logoutUser">{auth.user.username}</span>?</h2>
            <h4>If you need to lie low, we understand. Just say the word.</h4>
            <div id="logoutButtons">
                <Link to="/agents/all" className="cancelBtn" id="cancelLogout">Cancel</Link>
                <button onClick={handleLogout} to="/" className="submitBtn">Lie Low</button>
            </div>

        </div>
    );
}


export default Logout;