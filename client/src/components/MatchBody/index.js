import React from "react";
import "./style.css";

function MatchBody({ children }) {
  return (
    <div className="hero-body">
      <div className="container">
        <div className="matchContain">{children}</div>
      </div>
    </div>
  );
}

export default MatchBody;
