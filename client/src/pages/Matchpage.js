import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import API from "../utils/API";
import MatchContainer from "../components/MatchContainer";
import MatchBody from "../components/MatchBody";
import MatchPlayerInfo from "../components/MatchPlayerInfo";
import MatchOverviewInfo from "../components/MatchOverviewInfo";
import ProfileNav from "../components/ProfileNav";

class MatchPage extends Component {
  state = {
    matchData: []
  };

  componentWillMount() {
    let matchData = {
      //Need this inorder to reuse API route
      accountId: "dummyAcc",
      matchData: this.props.match.params.id
    };

    API.getMatchData(matchData)
      .then(res => {
        this.setState(
          {
            matchData: res.data
          },
          function update() {
            console.log("this.state.matchData: ", this.state.matchData);
          }
        );
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    //makes API call to DB to check for matchID and see if it already is in the DB
    //IF not make API call for matchtimeline for data
  }

  render() {
    return (
      <MatchContainer>
        <ProfileNav />
        <MatchBody>
          <MatchOverviewInfo
            gameCreation={this.state.matchData.gameCreation}
            gameDuration={this.state.matchData.gameDuration}
            gameId={this.state.matchData.gameId}
            gameMode={this.state.matchData.gameMode}
            gameType={this.state.matchData.gameType}
            mapId={this.state.matchData.mapId}
            queueId={this.state.matchData.queueId}
            platformId={this.state.matchData.platformId}
            seasonId={this.state.matchData.seasonId}
          />
          <MatchPlayerInfo
            participantIdentities={this.state.matchData.participantIdentities}
            participants={this.state.matchData.participants}
            teams={this.state.matchData.teams}
          />
        </MatchBody>
      </MatchContainer>
    );
  }
}

export default MatchPage;
