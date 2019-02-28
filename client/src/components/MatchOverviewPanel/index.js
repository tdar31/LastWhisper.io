import React from "react";
import "./style.css";

function MatchOverviewPanel({
  gameCreationDate,
  gameCreationTime,
  gameDuration,
  gameMode,
  queueId
  
}) {
  return (
    <div className="MatchOverviewPanel">
      <p className="queueId">{queueId}</p>
      <p className="gameCreationDate">{gameCreationDate}</p>
      <p className="gameCreationTime">Started at: {gameCreationTime}</p>
      <p className="gameDuration">Duration: {gameDuration}</p>
    </div>
  );
}

export default MatchOverviewPanel;
