import React from "react";
import "./style.css";

function ProfileNav() {
  return (
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>

          <a className="navbar-item champItem">Champions</a>
          <a className="navbar-item itemItem">Items</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <p className="">
              <input
                className="input proNavInput"
                type="text"
                placeholder="Search by Summoner Name"
              />
            </p>
            <p className="">
              <a className="button is-dark proNavSearchButton">Search</a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ProfileNav;
