import React from "react";
import "./style.css";

function UserNotFound({ children }) {
  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-content userNotFoundContent">
            <p className="userNotFoundText">
              Summoner name doesn't exist :(<br />
            </p>
            <img className="notFoundIMG" src="/images/splash/Amumu_8.jpg" />
            <img />
          </div>
        </article>
      </div>
    </div>
  );
}

export default UserNotFound;
