import "./fonts.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Matchpage from "./pages/Matchpage";
import Profilepage from "./pages/Profilepage";
// import ProfilePage from "./components/ProfilePage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/summonernotfound" component={Home} />
          <Route exact path="/match/:id" component={Matchpage} />
          <Route exact path="/summoner/:username/:region" component={Profilepage} />
          <Route exact path="/summoner/:username/:region/:theme" component={Profilepage} />
          <Route exact path="/summoner/:username/:region/:matchData" component={Profilepage} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
