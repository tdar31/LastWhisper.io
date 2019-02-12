import React from "react";
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
          <img alt="img" className="item0" src={item0} />
          <img alt="img" className="item1" src={item1} />
          <img alt="img" className="item2" src={item2} />
        </div>
        <div className="bottomContainer">
          <img alt="img" className="item3" src={item3} />
          <img alt="img" className="item4" src={item4} />
          <img alt="img" className="item5" src={item5} />
        </div>
      </div>
      <img alt="img" className="item6" src={item6} />
    </div>
  );
}

export default GameModuleItemInfo;
