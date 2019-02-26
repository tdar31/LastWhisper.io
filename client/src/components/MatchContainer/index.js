import React from "react";
import "./style.css";

function MatchContainer({ className, children }) {
  return (
    <div className={"matchContainer hero is-fullheight"}>{children}</div>
  );
}

export default MatchContainer;
