import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import classified from "../../images/classified.png";
import AuthContext from '../../utils/AuthContext';


import './style.css'


const DeleteAgent = (props) => {

    const [agent, setAgent] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        heightInInches: 36,
    });

    const auth = useContext(AuthContext);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const init = {
            headers: {
                "Authorization": `Bearer ${auth.user.token}`
            }
        };

        fetch(`http://localhost:8080/api/agent/${id}`, init)
            .then(res => {
                if (res.status === 404) {
                    return Promise.reject(`Received 404 Not Found for Spy ID: ${id}`);
                } else {
                    return res.json();
                }
            })
            .then(data => {
                setAgent({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    middleName: data.middleName,
                    dob: data.dob,
                    heightInInches: data.heightInInches
                })
            })
            .catch(err => console.log(err));
    }, [id])

    const handleDeleteSpy =() => {
        const init = {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${auth.user.token}`
            }
        }

        fetch(`http://localhost:8080/api/agent/${id}`, init)
            .then(res => {
                if (res.status === 204) {
                    history.push("/agents/all");
                }
                else if (res.status === 404) {
                    return Promise.reject(`Received 404 Not Found for Spy ID: ${id}`);
                } else {
                    return Promise.reject("We've been compromised. Aborting mission.");
                }
            })
            .catch(err => console.log(err));
    }
    
    return (

        <div id="deleteSpy" className="content">
            <h2>Redact Agent</h2>
            <section id="spyToDelete">
                <div id="spyImageDiv">
                    <img
                        src={agent.image ? agent.image : classified}
                        alt={`${agent.firstName} ${agent.middleName} ${agent.lastName}`}
                        width="300"
                    />
                </div>

                <div id="spyInformation">
                    <div className="spyDetails">
                        <p className="spyField">First Name:</p>
                        <p>{agent.firstName}</p>
                    </div>
                    <div className="spyDetails">
                        <p className="spyField">Middle Name:</p>
                        <p>{agent.middleName}</p>
                    </div>
                    <div className="spyDetails">
                        <p className="spyField">Last Name:</p>
                        <p>{agent.lastName}</p>
                    </div>
                    <div className="spyDetails">
                        <p className="spyField">Date of Birth:</p>
                        <p>{agent.dob}</p>
                    </div>
                    <div className="spyDetails">
                        <p className="spyField">Height (Inches):</p>
                        <p>{agent.heightInInches}</p>
                    </div>
                </div>
            </section>
            <section id="confirmDelete">
                <h2>Purge "{agent.firstName} {agent.middleName} {agent.lastName}" from Database?</h2>
                <div class="submitDiv">
                    <Link id="cancelBtn" to="/agents/all">Cancel</Link>
                    <button className="submitBtn" type="button" onClick={handleDeleteSpy}>Purge Spy</button>
                </div>
            </section>
        </div>
    );
}


export default DeleteAgent;