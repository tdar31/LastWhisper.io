import React, { Component } from "react";
import moment from "moment";
import "./style.css";
import GameModuleMatchInfo from "../GameModuleMatchInfo";
import GameModuleChampInfo from "../GameModuleChampInfo";
import GameModuleStatsInfo from "../GameModuleStatsInfo";
const champJsonData = require("../../assets/jsonData/champions.json");

class GameItem extends Component {
  state = {
    gameCreationDate: "",
    gameCreationTime: "",
    gameDuration: "",
    win: "",
    deaths: "",
    KDA: ""
  };

  componentDidMount() {
    console.log("champData: ", champJsonData);
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
    //Swaps win/loss Boolean to text
    //Need to figure out what to do for remake?
    if (this.props.win) {
      this.setState({
        win: "Victory"
      });
    } else {
      this.setState({
        win: "Defeat"
      });
    }
    //Calculating Creep Score + Creep Score Per Minute
    let creepS =
      (+this.props.totalMinionsKilled + +this.props.neutralMinionsKilled) /
      minutes;
    //Total Creep Score
    let cs = +this.props.totalMinionsKilled + +this.props.neutralMinionsKilled;
    //Creep Score Per Minute
    let csPM = Math.round(creepS * 10) / 10;
    //Calculating KDA score
    if (this.props.deaths == "0") {
      this.setState(
        {
          deaths: "1"
        },
        function onceDeathStateUpdated() {
          this.calculateKDA();
        }
      );
    } else {
      this.setState(
        {
          deaths: this.props.deaths
        },
        function onceDeathStateUpdated() {
          this.calculateKDA();
        }
      );
    }

    //Updates everything calculated above and push it to state
    this.setState({
      gameCreationDate: gCD,
      gameCreationTime: gCT,
      gameDuration: gD,
      creepScore: cs,
      creepScorePerMin: csPM
    });
  }

  calculateKDA = () => {
    let kda = (+this.props.kills + +this.props.assists) / +this.state.deaths;
    this.setState(
      {
        KDA: kda
      },
      function onceKDAStateUpdated() {
        // console.log("kda: ", this.state.KDA);
      }
    );
  };

  render() {
    return (
      <div className="GameItem">
        <GameModuleMatchInfo
          gameCreationDate={this.state.gameCreationDate}
          gameCreationTime={this.state.gameCreationTime}
          gameDuration={this.state.gameDuration}
          outcome={this.state.win}
        />
        <GameModuleChampInfo
          champName={this.props.championIdRAW}
          champIcon={process.env.PUBLIC_URL + this.props.championId}
          spell1={process.env.PUBLIC_URL + this.props.spell1Id}
          spell2={process.env.PUBLIC_URL + this.props.spell2Id}
          role={this.props.role}
        />
        <GameModuleStatsInfo
          kills={this.props.kills}
          deaths={this.state.deaths}
          assists={this.props.assists}
          champLevel={this.props.champLevel}
          goldEarned={this.props.goldEarned}
          goldSpent={this.props.goldEarned}
          perkPrimaryStyle={
            process.env.PUBLIC_URL + this.props.perkPrimaryStyle
          }
          perkSubStyle={process.env.PUBLIC_URL + this.props.perkSubStyle}
          totalMinionsKilled={this.props.totalMinionsKilled}
          creepScorePerMin={this.state.creepScorePerMin}
          creepScore={this.state.creepScore}
          KDA={this.state.KDA}
        />
        <div className="containerThree">
          <img
            alt="img"
            className="item0"
            src={process.env.PUBLIC_URL + this.props.item0}
          />
          <img
            alt="img"
            className="item1"
            src={process.env.PUBLIC_URL + this.props.item1}
          />
          <img
            alt="img"
            className="item2"
            src={process.env.PUBLIC_URL + this.props.item2}
          />
          <img
            alt="img"
            className="item3"
            src={process.env.PUBLIC_URL + this.props.item3}
          />
          <img
            alt="img"
            className="item4"
            src={process.env.PUBLIC_URL + this.props.item4}
          />
          <img
            alt="img"
            className="item5"
            src={process.env.PUBLIC_URL + this.props.item5}
          />
          <img
            alt="img"
            className="item6"
            src={process.env.PUBLIC_URL + this.props.item6}
          />
        </div>
      </div>
    );
  }
}

export default GameItem;
