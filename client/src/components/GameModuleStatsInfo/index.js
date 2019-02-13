import React from "react";
import ReactTooltip from "react-tooltip";
import "./style.css";

function GameModuleStatsInfo({
  kills,
  deaths,
  assists,
  champLevel,
  goldEarned,
  goldSpent,
  perkPrimaryStyle,
  perkSubStyle,
  totalMinionsKilled,
  creepScore,
  creepScorePerMin,
  KDA
}) {
  return (
    <div className="GameModuleStatsInfo">
      <ReactTooltip place="top" type="dark" effect="solid" />
      <img data-tip="1" className="perkPrimaryStyle" src={perkPrimaryStyle} />
      <img data-tip="2" className="perkSubStyle" src={perkSubStyle} />
      <div className="totalMinionsKilled">
        {creepScore} <span className="csPM">({creepScorePerMin})</span> CS
      </div>
      <div className="creepScore" />

      <div className="kills">
        {kills} /<span className="totalDeaths"> {deaths} </span>/ {assists}
      </div>
      <div className="KDA">KDA: {KDA}</div>
      <div className="champLevel" />
      <div className="goldEarned">
        {" "}
        Level: {champLevel} Gold: {goldEarned}
      </div>
    </div>
  );
}

export default GameModuleStatsInfo;
