import React, { Component } from "react";
import "./style.css";

class UserBanner extends Component {
  render() {
    return (
      <div className="userBanner has-background-dark">
        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <img
                className="userIcon"
                src={process.env.PUBLIC_URL + this.props.profileIcon}
              />
              <p className="heading">{this.props.username}</p>
              <p className="title">{this.props.level}</p>
              <button className="updateButton">Update</button>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">{this.props.username}</p>
              <p className="title">{this.props.level}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">{this.props.username}</p>
              <p className="title">{this.props.level}</p>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default UserBanner;
