import React from "react";
import "./style.css";

function HomeFooter() {
  return (
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li className="is-active">
              <a className="thresh">Thresh</a>
            </li>
            <li>
              <a className="brand">Brand</a>
            </li>
            <li>
              <a className="sejuani">Sejuani</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HomeFooter;
