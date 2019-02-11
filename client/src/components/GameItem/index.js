import React, { Component } from "react";
import moment from "moment";
import "./style.css";
import GameModuleMatchInfo from "../GameModuleMatchInfo";
import GameModuleChampInfo from "../GameModuleChampInfo";

class GameItem extends Component {
  state = {
    gameCreationDate: "",
    gameCreationTime: "",
    gameDuration: "",
    win: ""
  };

  componentDidMount() {
    //Converts game Creation into Date
    let dt = new Date(this.props.gameCreation);
    let gC = moment(dt).format("MMM Do YYYY,h:mm a");
    let gCD = gC.split(",", 1).toString();
    let gCT = gC
      .split(gCD + ",", 2)
      .join("")
      .toString();
    console.log(gCT);
    //Converts duration into Time
    var minutes = Math.floor(this.props.gameDuration / 60);
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
    //Updating the state for everything above
    this.setState({
      gameCreationDate: gCD,
      gameCreationTime: gCT,
      gameDuration: gD
    });
  }

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

        <div className="containerTwo">
          <div className="kills">kills{this.props.kills}</div>
          <div className="deaths">deaths{this.props.deaths}</div>
          <div className="assists">assists{this.props.assists}</div>
          <div className="champLevel">champLevel{this.props.champLevel}</div>
          <div className="goldEarned">goldEarned{this.props.goldEarned}</div>
          <div className="goldSpent">goldSpent{this.props.goldSpent}</div>
        </div>
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
