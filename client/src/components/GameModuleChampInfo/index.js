import React from "react";
import "./style.css";

function GameModuleChampInfo({ champName, champIcon, spell1, spell2, role }) {
  return (
    <div className="GameModuleChampInfo">
      <div className="containerOne">
        <img alt="img" className="champIcon" src={champIcon} />
      </div>

      <div className="containerTwo">
        <img alt="img" className="spell1" src={spell1} />
        <img alt="img" className="spell2" src={spell2} />
      </div>
      <div className="champName">{champName}</div>
      <div className="role">{role}</div>
    </div>
  );
}

export default GameModuleChampInfo;
