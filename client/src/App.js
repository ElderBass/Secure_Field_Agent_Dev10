import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import ViewAgents from "./components/ViewAgents";
import Login from "./components/Login";
import Logout from "./components/Logout";
import SignUp from "./components/SignUp";
import AddAgent from "./components/AddAgent";
import UpdateAgent from "./components/UpdateAgent";
import DeleteAgent from "./components/DeleteAgent";
import AuthContext from "./utils/AuthContext";
import ConfirmationMessage from "./components/ConfirmationMessage";
import LoginMessage from "./components/Login/LoginMessage";
import SignUpMessage from "./components/SignUp/SignUpMessage";


function App() {

  const [user, setUser] = useState(null);
  const [confirmation, setConfirmation] = useState({
    action: "",
    agentName: ""
  })

  const login = (token) => {
    console.log(token);
    const { id, sub: username, roles } = jwt_decode(token);

    const rolesArr = roles.split(',');

    const user = {
      id,
      username,
      roles: rolesArr,
      token,
      hasRole(role) {
        return this.roles.includes(role);
      }
    };
    console.log(user);
    setUser(user);
    return user;
  };

  const logout = () => {
    setUser(null);
  };

  const auth = {
    user: user ? { ...user } : null,
    login,
    logout
  };

  const setConfirmationMessage = (agentName, action) => {
    setConfirmation({
      action,
      agentName
    })
  };


  return (
    <AuthContext.Provider value={auth}>
      <Router>
        <div className="mainContainer">
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Router exact path="/signup/message">
              <SignUpMessage />
            </Router>
            <Route exact path="/agents/all">
              {user ? (
                <ViewAgents />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route exact path="/agents/add">
              {user ? (
                <AddAgent confirm={setConfirmationMessage}/>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route exact path ="/login/message">
              <LoginMessage />
            </Route>
            <Route path="/agents/edit/:id">
              {user ? (
                <UpdateAgent confirm={setConfirmationMessage} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/agents/delete/:id">
              {user ? (
                <DeleteAgent confirm={setConfirmationMessage} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/confirmation">
              {user ? (
                <ConfirmationMessage confirmation={confirmation} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
