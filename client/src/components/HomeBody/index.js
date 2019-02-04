import React from "react";

function HomeBody({ children }) {
  return (
    <div className="hero-body">
      <div className="container has-text-centered">{children}</div>
    </div>
  );
}

export default HomeBody;
