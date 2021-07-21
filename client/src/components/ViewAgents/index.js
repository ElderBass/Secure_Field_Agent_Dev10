import React from 'react';
import classified from "../../images/classified.png";

import './style.css'


const ViewAgents = (props) => {


    return (

        <main className="content">
            <div className="agentsBanner">
                <h2>All Agents</h2>
                <button onClick={props.addAgent} id="addAgentBtn">Add Agent +</button>
            </div>
            <div className="agentsDisplay">
                {props.agents.map(a => (
                    <div className="agentCard" key={`${a.firstName}-p-${a.lastName}-${a.agentId}`}>
                    <header><h4>{`${a.firstName} ${a.lastName}`}</h4></header>
                    <main>
                        <img
                            src={a.image ? a.image : classified}
                            alt={`${a.firstName} ${a.lastName}`}
                            className="agentImage"
                        />
                        <div className="spyInfo">
                            <table>
                                <tr>
                                    <td>DoB:</td>
                                    <td className="spyData">{a.dob ? a.dob : "Unknown"}</td>
                                </tr>
                                <tr>
                                    <td>Spy Since:</td>
                                    <td className="spyData">05/12/1990</td>
                                </tr>
                                <tr>
                                    <td>Height:</td>
                                    <td className="spyData">{`${a.heightInInches}"`}</td>
                                </tr>
                            </table>
                        </div>
                    </main>
                    <footer>
                        <button className="iconBtn" onClick={() => props.editAgent(a.agentId)}
                        ><i className="fas fa-pencil-alt fa-2x icon"></i
                        ></button>
                        <button className="iconBtn" onClick={() => props.deleteAgent(a.agentId)}
                        ><i className="fas fa-trash-alt fa-2x icon"></i
                        ></button>
                    </footer>
                </div>
                ))}
            </div>
        </main>
    );
}


export default ViewAgents;