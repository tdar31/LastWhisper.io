import React, { Component } from "react";
import moment from "moment";
import "./style.css";
import GameModuleMatchInfo from "../GameModuleMatchInfo";
import GameModuleChampInfo from "../GameModuleChampInfo";
import GameModuleStatsInfo from "../GameModuleStatsInfo";
import GameModuleItemInfo from "../GameModuleItemInfo";
const champJsonData = require("../../assets/jsonData/champions.json");

class GameItem extends Component {
  state = {
    gameCreationDate: "",
    gameCreationTime: "",
    gameDuration: "",
    win: "",
    deaths: "",
    KDA: "",
    champName: "",
    role: ""
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
    //
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
    //
    //Calculating Creep Score + Creep Score Per Minute
    let creepS =
      (+this.props.totalMinionsKilled + +this.props.neutralMinionsKilled) /
      minutes;
    //Total Creep Score
    let cs = +this.props.totalMinionsKilled + +this.props.neutralMinionsKilled;
    //Creep Score Per Minute
    let csPM = Math.round(creepS * 10) / 10;
    //
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
    //
    //Swaps champ ID number with champ name
    for (let i = 0; i < champJsonData.length; i++) {
      if (champJsonData[i].key === this.props.championIdRAW) {
        this.setState({
          champName: champJsonData[i].name
        });
      }
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
    let kd = (+this.props.kills + +this.props.assists) / +this.state.deaths;
    let kda = Math.round(kd * 10) / 10;
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
          champName={this.state.champName}
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
        <GameModuleItemInfo
          item0={process.env.PUBLIC_URL + this.props.item0}
          item1={process.env.PUBLIC_URL + this.props.item1}
          item2={process.env.PUBLIC_URL + this.props.item2}
          item3={process.env.PUBLIC_URL + this.props.item3}
          item4={process.env.PUBLIC_URL + this.props.item4}
          item5={process.env.PUBLIC_URL + this.props.item5}
          item6={process.env.PUBLIC_URL + this.props.item6}
        />
      </div>
    );
  }
}

export default GameItem;
