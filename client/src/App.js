import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import ProfilePage from "./components/ProfilePage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/summoner" component={ProfilePage} />
          <Route exact path="/summoner/:username/:theme" component={ProfilePage} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
