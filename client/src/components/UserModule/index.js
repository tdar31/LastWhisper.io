import React from "react";
import "./style.css";

function UserModule({ username, level, region, profileIcon, children }) {
  return (
    <div className="media-left">
      <p className="userText">
        <b>{username}</b>
      </p>
      <img className="userIcon" src={profileIcon} />
      <div className="levelContainer">
        <p className="levelText">{level}</p>
      </div>
    </div>
  );
}

export default UserModule;
