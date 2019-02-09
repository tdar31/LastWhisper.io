import React from "react";
// import "./style.css";

function GameItem({ championId, spell1Id, spell2Id, children }) {
  return (
    <div>
      <div className="GameItem has-background-dark">{championId}</div>
      <div>{spell1Id}</div>
      <div>{spell2Id}</div>
    </div>
  );
}

export default GameItem;
