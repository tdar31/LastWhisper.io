import React from "react";
import "./style.css";

function HomeFooter() {
  return (
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li className="is-active">
              <a>Thresh</a>
            </li>
            <li>
              <a>Brand</a>
            </li>
            <li>
              <a>Sejuani</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HomeFooter;
