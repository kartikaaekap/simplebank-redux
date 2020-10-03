import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

import AuthPage from "./components/login";
import Transaction from "./components/transactions"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }
  render() {
    const { loggedIn } = this.state
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/transactions" /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login" component={AuthPage}></Route>
          <Route exact path="/transactions" component={Transaction}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;