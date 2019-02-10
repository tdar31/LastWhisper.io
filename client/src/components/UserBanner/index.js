import React from "react";
import "./style.css";
// import logo from '../../../public/images/profileicon/3879.jpg';
// import src from '../../assets/images/profileicon/3879.jpg';

function UserBanner({ image, username, level, region, children }) {
  return (
    <div className="userBanner has-background-dark">
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <img className="userIcon" src={process.env.PUBLIC_URL + '/images/profileicon/3879.jpg'} />
            <p className="heading">{username}</p>
            <p className="title">{level}</p>
            <button className="updateButton">Update</button>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            {/* <img className="userIcon"/> */}
            <p className="heading">{username}</p>
            <p className="title">{level}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            {/* <img className="userIcon"/> */}
            <p className="heading">{username}</p>
            <p className="title">{level}</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default UserBanner;
