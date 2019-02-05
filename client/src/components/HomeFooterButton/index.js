import React from "react";
import "./style.css";

function HomeFooterButton({ onClick, className, children }) {
  return (
    <li onClick={onClick} className={className}>
      <a>{children}</a>
    </li>
  );
}

export default HomeFooterButton;
