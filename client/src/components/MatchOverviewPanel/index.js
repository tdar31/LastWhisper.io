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
      <span className="queueId">{queueId}</span>
      <span className="gameCreationDate">{gameCreationDate}</span>
      <span className="gameCreationTime">{gameCreationTime}</span>
      <span className="gameDuration">{gameDuration}</span>
    </div>
  );
}

export default MatchOverviewPanel;
