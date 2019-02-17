import React, { Component } from "react";
import "./style.css";

class UserBanner extends Component {
  render() {
    return (
      <div>
        <div class="box">
          <article class="media">
            <div class="media-left">
              <p className="userText">{this.props.username}</p>
              <img
                className="userIcon"
                src={process.env.PUBLIC_URL + this.props.profileIcon}
              />
              <p className="title">{this.props.level}</p>
            </div>
            <div class="media-content">
              <p className="rankedSoloText">Ranked Solo</p>
              <img
                className="rankedIcon"
                src={process.env.PUBLIC_URL + this.props.rank}
              />
              <button className="updateButton">Update</button>
            </div>
            <div class="media-content">
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
