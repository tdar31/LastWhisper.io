import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav
      class="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        {/* <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a> */}

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
          <a class="navbar-item" href="/">
            Home
          </a>

          <a class="navbar-item champItem">Champions</a>
          <a class="navbar-item itemItem">Items</a>
          {/* <a class="navbar-item">Champions</a>
          <a class="navbar-item">Champions</a> */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
