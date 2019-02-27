import React, { Component } from "react";
import moment from "moment";
import "./style.css";

class MatchOverviewInfo extends Component {
  state = {
    isData: false,
    gameCreation: "",
    gameCreationDate: "",
    gameCreationTime: "",
    gameDuration: "",
    gameId: "",
    gameMode: "",
    gameType: "",
    mapId: "",
    queueId: "",
    platformId: "",
    seasonId: "",
  };

  componentDidUpdate() {
    //makes API call to DB to check for matchID and see if it already is in the DB
    //IF not make API call for matchtimeline for data
    if (this.state.isData === false) {
      this.setState(
        {
          isData: true,
          gameCreation: this.props.gameCreation,
          gameDuration: this.props.gameDuration,
          gameId: this.props.gameId,
          gameMode: this.props.gameMode,
          gameType: this.props.gameType,
          mapId: this.props.mapId,
          queueId: this.props.queueId,
          platformId: this.props.platformId,
          seasonId: this.props.seasonId
        },
        function MatchOverviewInfo() {
          //
          //Converts game Creation into Date
          let dt = new Date(this.props.gameCreation);
          let gC = moment(dt).format("MMM Do YYYY,h:mm a");
          let gCD = gC.split(",", 1).toString();
          let gCT = gC
            .split(gCD + ",", 2)
            .join("")
            .toString();
          // console.log(gCT);
          //Converts duration into Time
          var minutes = Math.floor(this.props.gameDuration / 60);
          // console.log("Minutes: ", minutes);
          var seconds = this.props.gameDuration - minutes * 60;
          let gD = [minutes + `m ` + seconds + "s"].join(" ");
          //
          //Updating gameMode based on queueId
          //https://developer.riotgames.com/game-constants.html REFERENCE
          //Bot Matches
          if (
            this.props.queueId === 800 ||
            this.props.queueId === 810 ||
            this.props.queueId === 820 ||
            this.props.queueId === 830 ||
            this.props.queueId === 840 ||
            this.props.queueId === 850
          ) {
            this.setState({
              queueId: "Bot Match"
            });
          }

          //ARURF
          if (this.props.queueId === 900 || this.props.queueId === 1010) {
            this.setState({
              queueId: "ARURF"
            });
          }

          //ARAM
          if (this.props.queueId === 450 || this.props.queueId === 100) {
            this.setState({
              queueId: "ARAM"
            });
          }

          //Normal Draft Pick
          if (this.props.queueId === 400) {
            this.setState({
              queueId: "Normal (Draft Pick)"
            });
          }

          //Normal Blind Pick
          if (this.props.queueId === 430) {
            this.setState({
              queueId: "Normal (Draft Pick)"
            });
          }

          //Ranked Solo Pick
          if (this.props.queueId === 420) {
            this.setState({
              queueId: "Ranked Solo"
            });
          }

          //Ranked Flex Pick
          if (this.props.queueId === 440) {
            this.setState({
              queueId: "Ranked Flex"
            });
          }

          //Twisted Treeline Blind
          if (this.props.queueId === 460) {
            this.setState({
              queueId: "Twisted Treeline Blind"
            });
          }

          //Twisted Treeline Ranked
          if (this.props.queueId === 470) {
            this.setState({
              queueId: "Twisted Treeline Blind"
            });
          }

          //Clash
          if (this.props.queueId === 700) {
            this.setState({
              queueId: "Clash"
            });
          }
          //
          //Updates everything calculated above and push it to state
          this.setState(
            {
              gameCreationDate: gCD,
              gameCreationTime: gCT,
              gameDuration: gD
            },
            function() {
              console.log("MatchOverviewInfo POST: ", this.state);
            }
          );
        }
      );
    }
  }

  render() {
    return <div className="MatchOverviewInfo">MatchOverviewInfo</div>;
  }
}

export default MatchOverviewInfo;
