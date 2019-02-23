import React from "react";
import "./style.css";

function RankedModule({
  leaguePoints,
  totalGames,
  losses,
  wins,
  position,
  queueType,
  tier,
  rank,
  rankIcon,
  children
}) {
  return (
    <div className="media-content">
      <p className="rankedSoloText">
        <b>{queueType}</b>
      </p>
      <img className="rankedIcon" src={rankIcon} />

      <p className="rankPlacementText">
        {tier} {rank}
      </p>
      <p className="gamesPlayedText">
        LP: {leaguePoints} - W: {wins} L: {losses}
      </p>
    </div>
  );
}

export default RankedModule;
