import React from "react";
import "./style.css";

function HomeContainer({ children }) {
  return (
    <section className="hero is-success is-fullheight">{children}</section>
  );
  //className={["btn btn-lg", `btn-${type}`, className].join(" ")}
}

export default HomeContainer;
