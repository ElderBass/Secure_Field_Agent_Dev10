import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import ViewAgents from "./components/ViewAgents";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddAgent from "./components/AddAgent";
import UpdateAgent from "./components/UpdateAgent";
import DeleteAgent from "./components/DeleteAgent";


function App() {
  return (
    <Router>
      <div className="mainContainer">
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/agents/all">
            <ViewAgents />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/agents/add">
            <AddAgent />
          </Route>
          <Route exact path="/agents/edit/:id">
            <UpdateAgent />
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
  );
}

export default App;
