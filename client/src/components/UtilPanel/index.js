import React from "react";
import "./style.css";

function UtilPanel({
  type = "active",
  className,
  onClick,
  onClickMore,
  children
}) {
  return (
    <div className="utilBanner">
      <button
        className={["button updateButton", `is-${type}`, className].join(" ")}
        // className={loading}
        onClick={onClick}
      >
        Update!
      </button>
      <button className="button updateButton" onClick={onClickMore}>
        Load More Matches!
      </button>
    </div>
  );
}

export default UtilPanel;
