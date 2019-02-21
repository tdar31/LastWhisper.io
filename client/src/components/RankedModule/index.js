import React from "react";
import "./style.css";

function RankedModule({
  leaguePoints,
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
      <p className="positionText">{position}</p>
      <p className="rankPlacementText">
        {tier} {rank}
      </p>
      <img className="rankedIcon" src={rankIcon} />
    </div>
  );
}

export default RankedModule;
