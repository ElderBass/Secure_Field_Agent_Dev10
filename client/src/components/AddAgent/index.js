import React, { useState } from 'react';


import './style.css'


const AddAgent = (props) => {

    
    return (

        <div className="formContent">
            <h2>Add to our ranks of nobodies.</h2>
            <form className="form" onSubmit={props.submit}>

                <div className="field">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        className="inputField"
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={props.agent.firstName}
                        onChange={(e) => props.change(e)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        className="inputField"
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={props.agent.lastName}
                        onChange={(e) => props.change(e)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                        className="inputField"
                        id="dob"
                        name="dob"
                        type="date"
                        value={props.agent.dob}
                        onChange={(e) => props.change(e)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="heightInInches">Height (Inches):</label>
                    <input
                        className="inputField"
                        id="heightInInches"
                        name="heightInInches"
                        type="number"
                        min="48"
                        max="144"
                        value={props.agent.heightInInches}
                        onChange={(e) => props.change(e)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="image">Image (Optional):</label>
                    <input
                        className="inputField"
                        id="image"
                        name="image"
                        type="text"
                        placeholder="Paste image URL from web. For best results use 300 x 500."
                        value={props.agent.image}
                        onChange={(e) => props.change(e)}
                    />
                </div>
                <div className="submitDiv">
                    <button className="cancelBtn" onClick={props.cancel}>Cancel</button>
                    <button className="submitBtn" type="submit">Add Agent</button>
                </div>
            </form>
        </div>
    );
}


export default AddAgent;