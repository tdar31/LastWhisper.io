import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import Nav from "../Nav";
import ProfileBody from "../ProfileBody";
import ProfileContainer from "../ProfileContainer";

function ProfilePage() {
  return (
    <div>
      <ProfileContainer>
        <Nav />
        <ProfileBody>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>{" "}
        </ProfileBody>
      </ProfileContainer>
    </div>
  );
}

export default ProfilePage;
