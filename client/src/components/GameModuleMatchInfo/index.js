import React from "react";
import "./style.css";

function GameModuleMatchInfo({
  gameCreationDate,
  gameCreationTime,
  gameDuration,
  gameMode,
  queueId,
  outcome
}) {
  return (
    <div className="GameModuleMatchInfo">
      <div className="queueId">Normal</div>
      <b className="outcome">{outcome}</b>
      <div className="gameCreationDate">{gameCreationDate}</div>
      <div className="gameCreationTime">{gameCreationTime}
      
      
      
      </div>
      <div className="gameDuration">{gameDuration}</div>
    </div>



  );
}

export default GameModuleMatchInfo;
