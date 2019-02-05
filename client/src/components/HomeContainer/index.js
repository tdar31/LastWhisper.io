import React from "react";
import "./style.css";

function HomeContainer({ className, children }) {
  return (
    <section className= {["hero is-fullheight", className].join(" ")}>{children}</section>
  );
}

export default HomeContainer;
