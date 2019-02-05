import React from "react";
import "./style.css";

function HomeFooterButton({ type = "inactive", onClick, className, children }) {
  return (
    <li onClick={onClick} className={[`is-${type}`, className].join(" ")}>
      <a>{children}</a>
    </li>
  );
}

export default HomeFooterButton;
