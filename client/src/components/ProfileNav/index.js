import React from "react";
import "./style.css";

function ProfileNav({ className }) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

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
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Theme</a>

              <div className="navbar-dropdown is-right">
                <a className="navbar-item">Thresh</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Brand</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Sejuani</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ProfileNav;
