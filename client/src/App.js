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


function App() {

  const [user, setUser] = useState(null);

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
            <Route exact path="/agents/all">
            {user ? (
              <ViewAgents />
            ) : (
              <Redirect to="/login" />
            )}
            </Route>
            <Route exact path="/agents/add">
              {user ? (
              <AddAgent />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route exact path="/agents/edit/:id">
            {user ? (
              <UpdateAgent />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route exact path="/agents/delete/:id">
              <DeleteAgent />
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
