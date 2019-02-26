import React, { Component } from "react";
import "./style.css";
import MatchPlayerPanel from "../MatchPlayerPanel";

class MatchPlayerInfo extends Component {
  state = {
    isData: false,
    partLength: "",
    participantIdentities: [],
    participants: [],
    teams: []
  };
  //this.props.matchdata
  componentDidUpdate() {
    if (this.state.isData === false) {
      this.setState(
        {
          isData: true,
          partLength: "",
          participantIdentities: this.props.participantIdentities,
          participants: this.props.participants,
          teams: this.props.teams
        },
        function MatchPlayerInfo() {
          console.log("MatchPlayerInfo: ", this.state);
          //FOR LOOP UPDATING ID TO USERNAME FROM PARTI/IDENTITIES
        }
      );
    }
  }

  render() {
    return (
      <div className="MatchPlayerInfo">
        {this.state.participants.map((partData, index) => (
          <MatchPlayerPanel key={index} />
        ))}
      </div>
    );
  }
}

export default MatchPlayerInfo;
