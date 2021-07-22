import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../utils/AuthContext';

import Errors from '../Errors';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const auth = useContext(AuthContext);

  const history = useHistory();

  const usernameOnChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordOnChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const user = {
      username: username,
      password: password
    }

    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    };

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
          history.push("/");
        } else {
          setErrors(["Login Failed."]);
        }
      })
      .catch(error => console.log(error));

  };

  return (
    <div className="content formContent" id="loginContent">
        <h2>Don't worry, you were never here ;)</h2>
        <Errors errors={errors} />
        <form className="form" id="loginForm" onSubmit={formSubmitHandler}>
          <div className="field">
            <label for="userName">User Name:</label>
            <input
              className="inputField"
              id="userName"
              name="userName"
              type="text"
              onChange={usernameOnChangeHandler}
            />
          </div>
          <div className="field">
            <label for="password">Password:</label>
            <input
              className="inputField"
              id="password"
              name="password"
              type="password"
              onChange={passwordOnChangeHandler}
            />
          </div>
          <div className="submitDiv">
            <Link className="cancelBtn" to="/">Cancel</Link>
            <button className="submitBtn" type="submit">Login</button>
          </div>
        </form>
      </div>
  );
}

export default Login;