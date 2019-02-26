import React from "react";
import "./style.css";

function MatchPlayerPanel({
  gameCreationDate,
  gameCreationTime,
  gameDuration
}) {
  return (
    <div className="MatchPlayerPanel">
      <img className="playerIcon"/>
      <p className="playerUsername">username</p>
    </div>
  );
}

export default MatchPlayerPanel;
