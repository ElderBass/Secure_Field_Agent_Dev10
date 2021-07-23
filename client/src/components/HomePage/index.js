import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import thaler from "../../images/thaler.png";
import AuthContext from '../../utils/AuthContext';

import './style.css'

const HomePage = (props) => {

    const auth = useContext(AuthContext);

    // TODO add some links to different pages here OR have a legit navbar component alongside this shit

    return (

        <div id="homePage" className="content">
            <div id="welcomeDiv">
                <h2>Expert Surveillance.<br />Unbeatable Outcomes.</h2>
            </div>
            {auth.user ? <h2 id="welcomeMsg">Welcome back, <span id="welcomeUser">{auth.user.username}</span></h2>
                : <div className="container" id="loginSignup">
                    <Link className="landingLink" to="/login">Login</Link>
                    <Link className="landingLink" to="/signup">Sign Up</Link>
                </div>}
            <hr></hr>
            <div className="highlightedAgents">
                <h3>- Featured Agents -</h3>
                <div className="agentsDisplay">
                    <div className="homeAgentCard">
                        <header><h4>Michael Westen</h4></header>
                        <main>
                            <img
                                src="https://mjfredrick.files.wordpress.com/2011/03/burn_notice_s4_004.jpg?w=584"
                                alt="Michael Westen"
                                className="agentImage"
                            />
                            <p>
                                His name is Michael Westen. <br />
                                And he is a spy.
                            </p>
                        </main>
                    </div>
                    <div className="homeAgentCard">
                        <header><h4>Varys</h4></header>
                        <main>
                            <img
                                src="https://www.liveabout.com/thmb/-VPNf1Vq3tlG1ANHHTnKVEqaTvk=/1333x2000/filters:fill(auto,1)/varys-game-of-thrones-58bace0e5f9b58af5cb665c7.jpg"
                                className="agentImage"
                                alt="Varys the Spider"
                            />
                            <p>He lives to serve the realm...or does he?</p>
                        </main>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="highlightedAgents">
                <h3>- Recently Added -</h3>
                <div className="agentsDisplay">
                    <div className="homeAgentCard">
                        <header><h4>Carmen Cortez</h4></header>
                        <main>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/d/db/Carmen_Cortez_in_Spy_Kids.jpg"
                                alt="Carmen Cortez"
                                className="agentImage"
                            />
                            <p>"Spy work? That's easy..."</p>
                        </main>
                    </div>
                    <div className="homeAgentCard">
                        <header><h4>Thaler</h4></header>
                        <main>
                            <img
                                src={thaler}
                                alt="Thaler"
                                className="agentImage"
                            />
                            <p>"We doin' some ploughin' business?"</p>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HomePage;