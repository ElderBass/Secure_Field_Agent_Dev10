import React, { useState, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import AuthContext from '../../utils/AuthContext';
import Errors from "../Errors";

import './style.css'


const AddAgent = (props) => {

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

    const inputChangeHandler = (e) => {
        setAgent({
            ...agent,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmitAddForm = (e) => {
        e.preventDefault();

        const newAgent = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            middleName: e.target.middleName.value,
            dob: e.target.dob.value,
            heightInInches: e.target.heightInInches.value
        };

        const init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${auth.user.token}`
            },
            body: JSON.stringify(newAgent)
        };

        fetch('http://localhost:8080/api/agent', init)
            .then(response => {
                console.log("first response in add agent = ", response);
                if (response.status === 201 || response.status === 400) {
                    return response.json();
                }
                return response.json();
            })
            .then(data => {
                console.log("data before if/else in add agent = ", data);
                if (data.agentId) {
                    props.confirm(`${data.firstName} ${data.middleName} ${data.lastName}`, "added");
                    history.push('/confirmation');
                } else {
                    console.log("data in else, messages = ", data.message);
                    setErrors(data);
                }
            })
            .catch(error => console.log(error));
    }



    return (

        <div className="content formContent">
            <h2>Add to our ranks of nobodies.</h2>
            <br />
            <Errors errors={errors} />
            <form className="form" onSubmit={handleSubmitAddForm}>

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
                        value={agent.dob}
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
                    <button className="submitBtn" type="submit">Add Agent</button>
                </div>
            </form>
        </div>
    );
}


export default AddAgent;