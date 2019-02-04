import React from "react";

function HomeContainer({ children }) {
  return <section class="hero is-success is-fullheight" >{children}</section>;
  //className={["btn btn-lg", `btn-${type}`, className].join(" ")}
}

export default HomeContainer;
