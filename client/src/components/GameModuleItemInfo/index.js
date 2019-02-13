import React from "react";
import ReactTooltip from "react-tooltip";
import "./style.css";

function GameModuleItemInfo({
  item0,
  item0Name,
  item1,
  item1Name,
  item2,
  item2Name,
  item3,
  item3Name,
  item4,
  item4Name,
  item5,
  item5Name,
  item6,
  item6Name
}) {
  return (
    <div className="GameModuleItemInfo">
      <div className="itemContainer">
        <div className="topContainer">
          <ReactTooltip place="top" type="dark" effect="solid" />
          <img data-tip={item0Name} alt="img" className="item0" src={item0} />
          <img data-tip={item1Name} alt="img" className="item1" src={item1} />
          <img data-tip={item2Name} alt="img" className="item2" src={item2} />
        </div>
        <div className="bottomContainer">
          <img data-tip={item3Name} alt="img" className="item3" src={item3} />
          <img data-tip={item4Name} alt="img" className="item4" src={item4} />
          <img data-tip={item5Name} alt="img" className="item5" src={item5} />
        </div>
      </div>
      <img data-tip={item6Name} alt="img" className="item6" src={item6} />
    </div>
  );
}

export default GameModuleItemInfo;
