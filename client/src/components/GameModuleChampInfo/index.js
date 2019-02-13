import React from "react";
import ReactTooltip from "react-tooltip";
import "./style.css";

function GameModuleChampInfo({ champName, champIcon, spell1, spell2, spell1Name, spell2Name, role }) {
  return (
    <div className="GameModuleChampInfo">
      <ReactTooltip place="top" type="dark" effect="solid"/>
      <div className="champContainer">
        <img alt="img" className="champIcon" src={champIcon} />
        <img alt="img" className="spell1" data-tip={spell1Name} src={spell1} />
        <img alt="img" className="spell2" data-tip={spell2Name} src={spell2} />
      </div>
      <div className="champName">{champName}</div>
      {/* <div className="role">{role}</div> */}
    </div>
  );
}

export default GameModuleChampInfo;
