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
      <p className="queueIdMO">{queueId}</p>
      <p className="gameCreationDateMO">{gameCreationDate}</p>
      <p className="gameCreationTimeMO">Started at: {gameCreationTime}</p>
      <p className="gameDurationMO">Duration: {gameDuration}</p>
    </div>
  );
}

export default MatchOverviewPanel;
