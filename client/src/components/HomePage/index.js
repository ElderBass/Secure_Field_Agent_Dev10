import React, { useState } from 'react';
import ViewAgents from '../ViewAgents';
import AGENTS from "../../data";
import ConfirmationMessage from '../ConfirmationMessage';

import thaler from "../../images/thaler.png";

import './style.css'

const HomePage = (props) => {

    const [agents, setAgents] = useState(AGENTS);
    const [currentAgent, setCurrentAgent] = useState({});
    const [confirmationMessage, setConfirmationMessage] = useState({
        agent: {},
        action: ""
    })
    const [viewState, setViewState] = useState("list");

    const onInputChangeHandler = (e) => {
        e.preventDefault();
        setCurrentAgent({
            ...currentAgent,
            [e.target.name]: e.target.value
        })
    }

    const handleAddAgent = () => {
        setViewState("add");
    }

    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        const nextId = agents.length > 0 ? Math.max(...agents.map(m => m.agentId)) + 1 : 1;

        const newAgent = {
            agentId: nextId,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            image: e.target.image.value,
            dob: e.target.dob.value,
            heightInInches: e.target.heightInInches.value,
            aliases: [],
            agents: []
        }
        setCurrentAgent({ ...newAgent });
        setAgents([...agents, newAgent]);
        setViewState("confirm");
        setConfirmationMessage({
            agent: currentAgent,
            action: "added"
        })

    }

    const handleEditAgent = (id) => {
        setViewState("edit");

        for (let i = 0; i < agents.length; i++) {
            if (agents[i].agentId === id) {
                setCurrentAgent(agents[i]);
                break;
            }
        }
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault();

        const updatedAgent = {
            agentId: currentAgent.agentId,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            image: e.target.image.value,
            dob: e.target.dob.value,
            heightInInches: e.target.heightInInches.value,
            aliases: [],
            agents: []
        }

        const newAgents = [...agents];
        const updatedAgentIndex = newAgents.findIndex(a => a.agentId === currentAgent.agentId);

        newAgents[updatedAgentIndex] = updatedAgent;

        setCurrentAgent({ ...updatedAgent });
        setAgents(newAgents);
        setViewState("confirm");
        setConfirmationMessage({
            agent: currentAgent,
            action: "updated"
        })
    }

    const handleDeleteAgent = (id) => {

        for (let i = 0; i < agents.length; i++) {
            if (agents[i].agentId === id) {
                setCurrentAgent(agents[i]);
                console.log("current agent inside delete agent if statement = ", currentAgent);
                break;
            }
        }
        setViewState("delete");
    }

    const handleDeleteConfirmation = (e) => {
        e.preventDefault();

        setAgents(agents.filter(a => a.agentId !== currentAgent.agentId));
        setViewState("confirm");

        setConfirmationMessage({
            agent: currentAgent,
            action: "deleted"
        })
    }

    const handleCancelForm = () => {
        setViewState("list");
        setCurrentAgent({});
    }

    return (

        <main id="homePage" className="content">
            <section id="welcomeDiv">
                <h2>Expert Surveillance.<br />Unbeatable Outcomes.</h2>
            </section>
            <section className="highlightedAgents">
                <h3>- Featured -</h3>
                <div className="agentDisplay">
                    <div className="agentCard">
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
                    <div className="agentCard">
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
            </section>
            <section className="highlightedAgents">
                <h3>- Recently Added -</h3>
                <div className="agentDisplay">
                    <div className="agentCard">
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
                    <div className="agentCard">
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
            </section>
        </main>
    );
}


export default HomePage;