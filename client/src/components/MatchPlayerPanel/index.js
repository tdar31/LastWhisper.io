import React from "react";
import "./style.css";

function MatchPlayerPanel({
  championId,
  playerLevel,
  spell1Id,
  spell2Id,
  perkPrimaryStyle,
  perkSubStyle,
  item0,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6
}) {
  return (
    <div className="MatchPlayerPanel">
      <img className="playerIcon" src={championId} />
      <p className="playerUsername">username</p>
      <p className="playerLevel">Level: {playerLevel}</p>
      <p className="playerKDA">KDA</p>
      <p className="playerDamage">Damage</p>
      <p className="playerWard">Ward</p>
      <p className="playerCS">CS</p>
      <img className="spell1Icon" src={spell1Id}/>
      <img className="spell2Icon" src={spell2Id}/>
      <img className="perkPrimaryIcon" src={perkPrimaryStyle}/>
      <img className="perkSubIcon" src={perkSubStyle}/>
      <img className="playerItem0" src={item0} />
      <img className="playerItem1" src={item1} />
      <img className="playerItem2" src={item2} />
      <img className="playerItem3" src={item3} />
      <img className="playerItem4" src={item4} />
      <img className="playerItem5" src={item5} />
      <img className="playerItem6" src={item6} />
    </div>
  );
}

export default MatchPlayerPanel;
