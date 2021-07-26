import React, { useContext, useState } from 'react';
import { useHistory, Link } from "react-router-dom"
import Errors from "../Errors";
import AuthContext from '../../utils/AuthContext';

import './style.css'


const SignUp = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const auth = useContext(AuthContext);

    const history = useHistory();

    const usernameOnChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordOnChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const confirmPasswordOnChangeHandler = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleRegisterUser = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrors(["Passwords must match. You know the drill."]);
            return;
        }

        const user = {
            username: username,
            password: password
        };

        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        };

        await fetch('http://localhost:5000/create_account', init)
            .then(response => {
                console.log(response);
                if (response.status === 201) {
                    return response.json();
                } else if (response.status === 400) {
                    return response.json();
                }
                return Promise.reject('Something unexpected went wrong :)');
            })
            .then(data => {
                if (data.messages) {
                    setErrors(data.messages);
                } else {
                    fetch('http://localhost:5000/authenticate', init)
                        .then(response => {
                            if (response.status === 200) {
                                return response.json();
                            } else if (response.status === 403) {
                                return null;
                            }
                            return Promise.reject('Something unexpected went wrong :)');
                        })
                        .then(data => {
                            if (data) {
                                auth.login(data.jwt_token);
                                history.push("/signup/message");
                            } else {
                                setErrors(["Registration Failed."]);
                            }
                        })
                        .catch(error => console.log(error));
                }
            })
            .catch(error => console.log(error));
    };


    return (
        <div className="content formContent">
            <h2 className="my-4">Go Incognito.</h2>
            <Errors errors={errors} />
            <form className="form" onSubmit={handleRegisterUser}>
                <div className="form-group field">
                    <label htmlFor="username">Username:</label>
                    <input className="inputField" type="text" id="username" name="username"
                        value={username} onChange={usernameOnChangeHandler} />
                </div>
                <div className="form-group field">
                    <label htmlFor="password">Password:</label>
                    <input className="inputField" type="password" id="password" name="password"
                        value={password} onChange={passwordOnChangeHandler} />
                </div>
                <div className="form-group field">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input className="inputField" type="password" id="confirmPassword" name="confirmPassword"
                        value={confirmPassword} onChange={confirmPasswordOnChangeHandler} />
                </div>
                <div className="submitDiv">
                    <Link to="/" className="cancelBtn">Cancel</Link>
                    <button className="submitBtn" type="submit">Register</button>
                </div>
            </form>
        </div>

    );
}


export default SignUp;