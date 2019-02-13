import React from "react";
import ReactTooltip from "react-tooltip";
import "./style.css";

function GameModuleItemInfo({
  item0,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6
}) {
  return (
    <div className="GameModuleItemInfo">
      <div className="itemContainer">
        <div className="topContainer">
          <ReactTooltip place="top" type="dark" effect="solid" />
          <img data-tip="1" alt="img" className="item0" src={item0} />
          <img data-tip="2" alt="img" className="item1" src={item1} />
          <img data-tip="3" alt="img" className="item2" src={item2} />
        </div>
        <div className="bottomContainer">
          <img data-tip="4" alt="img" className="item3" src={item3} />
          <img data-tip="5" alt="img" className="item4" src={item4} />
          <img data-tip="6" alt="img" className="item5" src={item5} />
        </div>
      </div>
      <img data-tip="7" alt="img" className="item6" src={item6} />
    </div>
  );
}

export default GameModuleItemInfo;
