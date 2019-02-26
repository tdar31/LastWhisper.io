import React, { Component } from "react";
import "./style.css";

class MatchOverviewInfo extends Component {
  state = {
    isData: false,
    gameCreation: "",
    gameDuration: "",
    gameId: "",
    gameMode: "",
    gameType: "",
    mapId: "",
    queueId: "",
    platformId: "",
    seasonId: ""
  };

  componentDidUpdate() {
    //makes API call to DB to check for matchID and see if it already is in the DB
    //IF not make API call for matchtimeline for data
    if (this.state.isData === false) {
      this.setState(
        {
          isData: true,
          // participantIdentities: this.props.participantIdentities,
          // participants: this.props.participants,
          // teams: this.props.teams
        },
        function MatchOverviewInfo() {
          console.log("MatchOverviewInfo: ", this.state);
        }
      );
    }
  }

  render() {
    return <div className="MatchOverviewInfo">MatchOverviewInfo</div>;
  }
}

export default MatchOverviewInfo;
