import React, { Component } from "react";
import "./style.css";

class MatchOverviewInfo extends Component {
  state = {};

  componentDidUpdate() {
    //makes API call to DB to check for matchID and see if it already is in the DB
    //IF not make API call for matchtimeline for data
    console.log(this.props)
  }

  render() {
    return <div className="MatchOverviewInfo">MatchOverviewInfo</div>;
  }
}

export default MatchOverviewInfo;
