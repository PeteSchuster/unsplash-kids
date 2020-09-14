import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import Admin from "./containers/Admin";
import Home from "./containers/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
};

export default App;