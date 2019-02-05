import React from "react";
import "./style.css";

function HomeFooter({ type = "inactive", onClick, className, children }) {
  return (
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>{children}</ul>
        </div>
      </nav>
    </div>
  );
}

export default HomeFooter;

//https://stackoverflow.com/questions/45262381/toggle-css-class-for-two-buttons-when-either-is-clicked
