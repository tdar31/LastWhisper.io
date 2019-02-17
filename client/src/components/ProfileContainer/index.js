import React from "react";
import "./style.css";

function ProfileContainer({ className, children }) {
  return <div className={["profileContainer hero is-fullheight", className].join(" ")}>{children}</div>;
  // return <div className={"profileContainer hero is-fullheight"}>{children}</div>;

}

export default ProfileContainer;
