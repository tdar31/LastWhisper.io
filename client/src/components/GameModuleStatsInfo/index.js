import React from "react";
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
      <img className="perkPrimaryStyle" src={perkPrimaryStyle} />
      <img className="perkSubStyle" src={perkSubStyle} />
      <div className="totalMinionsKilled">
        {creepScore} ({creepScorePerMin}) CS
      </div>
      <div className="creepScore" />

      <div className="kills">
        {kills} / {deaths} / {assists}
      </div>
      <div className="KDA">KDA: {KDA}</div>
      <div className="champLevel">Level: {champLevel}</div>
      <div className="goldEarned">Gold Earned: {goldEarned}</div>
    </div>
  );
}

export default GameModuleStatsInfo;
