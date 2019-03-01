import React from "react";
import { Col, Row, Container } from "../components/Grid";
import ProfileContainer from "../components/ProfileContainer";
import Nav from "../components/Nav";
import ProfileBody from "../components/ProfileBody";

function NoMatch() {
  return (
    <div>
      <ProfileContainer>
        <Nav />
        <ProfileBody>
          <div className="box">
            <article className="media">
              <div className="media-content userNotFoundContent">
                <p className="userNotFoundText">
                  404 page not found D:
                  <br />
                </p>
                <img className="notFoundIMG" src="/images/splash/Amumu_8.jpg" />
                <img />
              </div>
            </article>
          </div>
        </ProfileBody>
      </ProfileContainer>
    </div>
  );
}

export default NoMatch;
