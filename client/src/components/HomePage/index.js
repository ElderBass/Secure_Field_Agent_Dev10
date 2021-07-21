import React, { useState } from 'react';
import ViewAgents from '../ViewAgents';
import AGENTS from "../../data";
import ConfirmationMessage from '../ConfirmationMessage';
import AddAgent from '../AddAgent';
import UpdateAgent from '../UpdateAgent';
import DeleteAgent from '../DeleteAgent';

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

        <div className="content">
            {viewState === "confirm" ? <ConfirmationMessage
                agent={currentAgent}
                confirm={handleCancelForm}
                action={confirmationMessage.action} />
                : null}

            {viewState === "add" ? <AddAgent
                agent={currentAgent}
                submit={handleAddFormSubmit}
                change={onInputChangeHandler}
                cancel={handleCancelForm} />
                : null}

            {viewState === "edit" ? <UpdateAgent
                agent={currentAgent}
                change={onInputChangeHandler}
                submit={handleEditFormSubmit}
                cancel={handleCancelForm} />
                : null}

            {viewState === "delete" ? <DeleteAgent
                agent={currentAgent}
                confirm={handleDeleteConfirmation}
                cancel={handleCancelForm} />
                : null}

            {viewState === "list" ? <ViewAgents agents={agents}
                addAgent={handleAddAgent}
                editAgent={handleEditAgent}
                deleteAgent={handleDeleteAgent} />
                : null}

        </div>
    );
}


export default HomePage;