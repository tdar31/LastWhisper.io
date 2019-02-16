import React from "react";
import "./style.css";

function UserBody({ props, playerMatchData, children }) {
  return (
    <div className="userBody columns">
      {children}
    </div>
  );
}

export default UserBody;
