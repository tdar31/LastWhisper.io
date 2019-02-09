import React from "react";
import "./style.css";

function GameContainer({ championId, spell1Id, spell2Id, children }) {
  return (
    <div className="GameContainer has-background-dark columns">
    {children}
    </div>
  );
}

export default GameContainer;
