import React from 'react';
import classified from "../../images/classified.png";

import './style.css'


const DeleteAgent = (props) => {


    return (

        <div id="deleteSpy">
            <h2>Redact Agent</h2>
            <section id="spyToDelete">
                <div id="spyImageDiv">
                    <img
                        src={props.agent.image ? props.agent.image : classified}
                        alt={`${props.agent.firstName} ${props.agent.lastName}`}
                        width="300"
                    />
                </div>

                <div id="spyInformation">
                    <div className="spyDetails">
                        <p className="spyField">First Name:</p>
                        <p>{props.agent.firstName}</p>
                    </div>
                    <div className="spyDetails">
                        <p className="spyField">Last Name:</p>
                        <p>{props.agent.lastName}</p>
                    </div>
                    <div className="spyDetails">
                        <p className="spyField">Date of Birth:</p>
                        <p>{props.agent.dob}</p>
                    </div>
                    <div className="spyDetails">
                        <p className="spyField">Height (Inches):</p>
                        <p>{props.agent.heightInInches}</p>
                    </div>
                </div>
            </section>
            <section id="confirmDelete">
                <h2>Delete "{props.agent.firstName} {props.agent.lastName}" from Database?</h2>
                <div class="submitDiv">
                    <button id="cancelBtn" onClick={props.cancel}>Cancel</button>
                    <button className="submitBtn" type="button" onClick={props.confirm}>Purge Spy</button>
                </div>
            </section>
        </div>
    );
}


export default DeleteAgent;