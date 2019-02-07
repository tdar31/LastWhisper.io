import React from "react";
import "./style.css";

function UserBanner({ image, username, level, region, children }) {
  return (
    <div className="userBanner has-background-dark columns">
      <div className="column is-9">REEEE</div>
      <div className="column is-3">
        <img src={require("../../images/3879.jpg")} className="userIcon column is-offset-4"></img>
        <div className="column has-text-centered">{username+" "}{region.toUpperCase()}</div>
        <div className="column has-text-centered">{level}</div>
      </div>
    </div>
  );
}

export default UserBanner;
