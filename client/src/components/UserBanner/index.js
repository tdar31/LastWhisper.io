import React, { Component } from "react";
import "./style.css";

class UserBanner extends Component {
  render() {
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <p className="userText">
                <b>{this.props.username}</b>
              </p>
              <img
                className="userIcon"
                src={process.env.PUBLIC_URL + this.props.profileIcon}
              />
              <div className="levelContainer">
                <p className="levelText">{this.props.level}</p>
              </div>
            </div>
            <div className="media-content">
              <p className="rankedSoloText">
                <b>Ranked Solo</b>
              </p>
              <p className="positionText">Support</p>
              <p className="rankPlacementText">Platinum 4</p>
              <img
                className="rankedIcon"
                src={process.env.PUBLIC_URL + this.props.rank}
              />
            </div>
            <div className="media-content">
              <p className="rankedSoloText">Ranked Solo</p>
              <img
                className="rankedIcon"
                src={process.env.PUBLIC_URL + this.props.rank}
              />
              <button className="updateButton">Update</button>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default UserBanner;
