import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";

import AuthPage from "./components/login";
import Transaction from "./components/transactions";

const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loggedIn: false
  //   }
  // }

  // const { loggedIn } = this.state;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {false ? <Redirect to="/transactions" /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login" component={AuthPage}></Route>
        <Route exact path="/transactions" component={Transaction}></Route>
      </Switch>
    </Router>
  );
};

export default App;
