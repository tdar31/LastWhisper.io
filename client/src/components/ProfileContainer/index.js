import React from "react";
import "./style.css";

function ProfileContainer({children}) {
  return (
    <div className="profileContainer hero is-fullheight">{children}</div>
  );
}

export default ProfileContainer;
