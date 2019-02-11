import React, { Component } from "react";
import "./style.css";

class GameItem extends Component {
  componentDidMount() {
    console.log("this.props.win: ", this.props.win);
  }

  render() {
    return (
      <div className="GameItem has-background-dark">
        <div className="containerZero">
          <img alt="img"
            className="champIcon"
            src={process.env.PUBLIC_URL + this.props.championId}
          />
          <div className="containerOne">
            <img alt="img"
              className="spell1"
              src={process.env.PUBLIC_URL + this.props.spell1Id}
            />
            <img alt="img"
              className="spell2"
              src={process.env.PUBLIC_URL + this.props.spell2Id}
            />
          </div>
          <span className="champName">Pyke</span>
          <div className="role">{this.props.role}</div>
        </div>

        <div className="containerTwo">
          <div className="kills">kills{this.props.kills}</div>
          <div className="deaths">deaths{this.props.deaths}</div>
          <div className="assists">assists{this.props.assists}</div>
          <div className="champLevel">champLevel{this.props.champLevel}</div>
          <div className="goldEarned">goldEarned{this.props.goldEarned}</div>
          <div className="goldSpent">goldSpent{this.props.goldSpent}</div>
        </div>
        <div className="containerThree">
          <img alt="img"
            className="item0"
            src={process.env.PUBLIC_URL + this.props.item0}
          />
          <img alt="img"
            className="item1"
            src={process.env.PUBLIC_URL + this.props.item1}
          />
          <img alt="img"
            className="item2"
            src={process.env.PUBLIC_URL + this.props.item2}
          />
          <img alt="img"
            className="item3"
            src={process.env.PUBLIC_URL + this.props.item3}
          />
          <img alt="img"
            className="item4"
            src={process.env.PUBLIC_URL + this.props.item4}
          />
          <img alt="img"
            className="item5"
            src={process.env.PUBLIC_URL + this.props.item5}
          />
          <img alt="img"
            className="item6"
            src={process.env.PUBLIC_URL + this.props.item6}
          />
        </div>
      </div>
    );
  }
}

export default GameItem;
