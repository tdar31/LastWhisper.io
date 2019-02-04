import React from "react";

function SearchBar({ onClick, value }) {
  return (
    <div className="field has-addons has-addons-centered">
      <p className="control">
        <input
          className="input"
          type="text"
          placeholder="Search by Summoner Name"
          value={value}
        />
      </p>
      {/* FIGURE OUT HOW TO FIGURE OUT WHICH OPTION IS SELECTED AND RETURN TO FRONT END FOR QUERY */}
      <p className="control">
        <span className="select">
          <select>
            <option>NA</option>
            <option>EU</option>
            <option>KR</option>
          </select>
        </span>
      </p>
      <p className="control">
        <a className="button is-dark" onClick={onClick}>
          Search
        </a>
      </p>
    </div>
  );
}

export default SearchBar;
