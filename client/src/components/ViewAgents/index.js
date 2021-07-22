import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from "../../utils/AuthContext";
import classified from "../../images/classified.png";

import './style.css'


const ViewAgents = (props) => {

    const [agents, setAgents] = useState([]);
    const auth = useContext(AuthContext);
  
    const getAgents = () => {
  
      const init = {
        headers: {
          "Authorization": `Bearer ${auth.user.token}`
        }
      }
  
      fetch('http://localhost:8080/api/agent', init)
        .then(response => response.json())
        .then(data => setAgents(data))
        .catch(error => console.log(error));
    };
  
    useEffect(() => {
      getAgents();
    }, []);

    return (

        <main className="content">
            <div className="agentsBanner">
                <h2>All Agents</h2>
                <Link to="/agents/add" id="addAgentBtn">Add Agent +</Link>
            </div>
            <div className="agentsDisplay">
                {agents.map(a => (
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
                        <Link className="iconBtn" to={`/agents/edit/${a.agentId}`}
                        ><i className="fas fa-pencil-alt fa-2x icon"></i
                        ></Link>
                        <Link className="iconBtn" to={`/agents/delete/${a.agentId}`}
                        ><i className="fas fa-trash-alt fa-2x icon"></i
                        ></Link>
                    </footer>
                </div>
                ))}
            </div>
        </main>
    );
}


export default ViewAgents;