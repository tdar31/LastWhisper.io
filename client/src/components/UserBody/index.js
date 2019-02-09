import React from "react";
import "./style.css";

function UserBody({ props, playerMatchData, children }) {
  return (
    <div className="userBody has-background-dark columns">
      {children}
    </div>
  );
}

export default UserBody;
