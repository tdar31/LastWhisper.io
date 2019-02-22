import React from "react";
import "./style.css";

function UtilPanel({ onClick, children }) {
  return (
    <div className="utilBanner">
      <button className="updateButton" onClick={onClick}>Update!</button>

    </div>
  );
}

export default UtilPanel;
