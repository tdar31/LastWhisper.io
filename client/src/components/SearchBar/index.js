import React from "react";
import "./style.css";

function SearchBar({ onClick, value, onChange }) {
  return (
    <div className="field has-addons has-addons-centered">
      <p className="control ">
        <input
          className="input searchBarInput"
          type="text"
          placeholder="Search by Summoner Name"
          value={value}
          onChange={onChange}
        />
      </p>
      {/* FIGURE OUT HOW TO KNOW WHICH OPTION IS SELECTED AND RETURN TO FRONT END FOR QUERY */}
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
