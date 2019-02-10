import React, { Component } from "react";
var data = require("../../assets/jsonData/champions.json");
// import "./style.css";

class GameItem extends Component {
  state = {
    champIdGI: ""
  };
  // props,
  // children,
  // championId = "",
  // spell1Id,
  // spell2Id,
  // assists,
  // champLevel,
  // deaths,
  // goldEarned,
  // goldSpent,
  // item0,
  // item1,
  // item2,
  // item3,
  // item4,
  // item5,
  // item6,
  // kills,
  // win,
  // role

  componentDidMount() {
    this.setState(
      {
        champIdGI: this.props.championId
      },
      function onceStateUpdated() {
        console.log(
          "this.state.champIdGI: ",
          this.state.champIdGI
        );
      }
    );
  }

  render() {
    return (
      <div className="GameItem has-background-dark">
        <img
          className="champIcon"
          // src={require("../../assets/images/champion/555.png")}
          src={process.env.PUBLIC_URL + this.props.championId}
        />
        <img src={process.env.PUBLIC_URL + this.props.spell1Id}></img>
        <img src={process.env.PUBLIC_URL + this.props.spell2Id}></img>
        <div>assists{this.props.assists}</div>
        <div>champLevel{this.props.champLevel}</div>
        <div>deaths{this.props.deaths}</div>
        <div>goldEarned{this.props.goldEarned}</div>
        <div>goldSpent{this.props.goldSpent}</div>
        <div>item0/{this.props.item0}</div>
        <div>item1/{this.props.item1}</div>
        <div>item2/{this.props.item2}</div>
        <div>item3/{this.props.item3}</div>
        <div>item4/{this.props.item4}</div>
        <div>item5/{this.props.item5}</div>
        <div>item6/{this.props.item6}</div>
        <div>kills{this.props.kills}</div>
        <div>win{this.props.win}</div>
        <div>role{this.props.role}</div>
      </div>
    );
  }
}

// console.log({championId.toString()})

export default GameItem;
