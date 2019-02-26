import React, { Component } from "react";
import "./style.css";
import MatchPlayerPanel from "../MatchPlayerPanel";

class MatchPlayerInfo extends Component {
  state = {
    matchData: [1,2,3]
  };
  //this.props.matchdata
  componentDidUpdate() {
    // this.setState({

    // })
    // for (let i = 0; i < this.props.participants.length; i++) {
    //   let participantsArr = this.props.participants[i]
    console.log(this.props)

    // }
  }

  render() {
    return (
      <div className="MatchPlayerInfo">
        MatchPlayerInfo
        {this.state.matchData.map((matchData, index) => (
          <MatchPlayerPanel />
        ))}
      </div>
    );
  }
}

export default MatchPlayerInfo;
