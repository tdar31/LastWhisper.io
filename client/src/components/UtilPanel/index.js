import React from "react";
import "./style.css";

function UtilPanel({ type = "active", className, onClick, children }) {
  return (
    <div className="utilBanner">
      <button
        className={["button updateButton", `is-${type}`, className].join(" ")}
        // className={loading}
        onClick={onClick}
      >
        Update!
      </button>
    </div>
  );
}

export default UtilPanel;
