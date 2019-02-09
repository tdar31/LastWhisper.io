import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">Home</a>

          <a className="navbar-item">Documentation</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            {/* <div className="buttons">
              <a className="button is-success">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
