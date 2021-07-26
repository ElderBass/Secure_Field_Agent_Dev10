import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import AuthContext from '../../utils/AuthContext';
import Errors from '../Errors';

import './style.css'


const UpdateAgent = (props) => {

    const [agent, setAgent] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        heightInInches: 36,
    });

    const [errors, setErrors] = useState([]);

    const auth = useContext(AuthContext);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const init = {
            headers: {
                "Authorization": `Bearer ${auth.user.token}`
            }
        }
        fetch(`http://localhost:8080/api/agent/${id}`, init)
            .then(res => {

                if (res.status === 404) {
                    return Promise.reject(`Spy #${id} not in our records. Try again.`);
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

    const inputChangeHandler = (e) => {
        setAgent({
            ...agent,
            [e.target.name]: e.target.value
        })
    };

    const handleEditFormSubmit = (e) => {
        e.preventDefault();

        const newAgent = {
            agentId: id,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            middleName: e.target.middleName.value,
            dob: e.target.dob.value,
            heightInInches: e.target.heightInInches.value
        };

        const init = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${auth.user.token}`
            },
            body: JSON.stringify(newAgent)
        };

        fetch(`http://localhost:8080/api/agent/${id}`, init)
            .then(res => {
                console.log("res in edit fetch = ", res);
                if (res.status === 204) {
                    return null;
                } else if (res.status === 404) {
                    return Promise.reject(`Spy #${id} not in our records. Try again.`);
                } else {
                    return Promise.reject("We've been compromised. Mission aborted.");
                }
            })
            .then(data => {
                if (!data) {
                    props.confirm(`${agent.firstName} ${agent.middleName} ${agent.lastName}`, "updated");
                    history.push('/confirmation');
                } else {
                    setErrors(data);
                }
            })
            .catch(error => console.log(error));
    }

    return (

        <div className="content formContent">
            <h2>Clean the slate and start fresh.</h2>
            <br />
            <Errors errors={errors} />
            <form className="form" onSubmit={handleEditFormSubmit}>
                <div className="field">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        className="inputField"
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={agent.firstName}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="field">
                    <label htmlFor="middleName">Middle Name:</label>
                    <input
                        className="inputField"
                        id="middleName"
                        name="middleName"
                        type="text"
                        value={agent.middleName}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="field">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        className="inputField"
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={agent.lastName}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="field">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                        className="inputField"
                        id="dob"
                        name="dob"
                        type="date"
                        defaultValue={agent.dob}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="field">
                    <label htmlFor="heightInInches">Height (Inches):</label>
                    <input
                        className="inputField"
                        id="heightInInches"
                        name="heightInInches"
                        type="number"
                        min="36"
                        max="144"
                        value={agent.heightInInches}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="submitDiv">
                    <Link className="cancelBtn" to="/agents/all">Cancel</Link>
                    <button className="submitBtn" type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    );
}


export default UpdateAgent;