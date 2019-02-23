import React from "react";
import "./style.css";

function ProfileNav({ onClick, value, onChange, region }) {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
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
          <a className="navbar-item" href="/">
            Home
          </a>

          <a className="navbar-item champItem">Champions</a>
          <a className="navbar-item itemItem">Items</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <p className="">
              <input
                className="input proNavInput"
                type="text"
                placeholder="Search by Summoner Name"
                onChange={onChange}
              />
            </p>
            <p className="">
              <a
                className="button is-dark proNavSearchButton"
                onClick={onClick}
              >
                Search
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ProfileNav;
