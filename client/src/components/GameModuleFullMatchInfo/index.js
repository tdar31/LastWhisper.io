import React from "react";
// import ReactTooltip from "react-tooltip";
import "./style.css";

function GameModuleFullMatchInfo({ gameId }) {
  return (
    <div className="GameModuleFullMatchInfo">
      <a className="fullMatchText" href={gameId}>View<br></br>Match Details</a>
    </div>
  );
}

export default GameModuleFullMatchInfo;
