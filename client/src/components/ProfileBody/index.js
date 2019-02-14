import React from "react";
import "./style.css";

function ProfileBody({ children }) {
  return (
    <div className="hero-body">
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default ProfileBody;
