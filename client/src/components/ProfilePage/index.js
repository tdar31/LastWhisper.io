import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import Nav from "../Nav";

function ProfilePage() {
  // state = {
  //   user: {}
  // };

  // componentDidMount() {
  //   console.log();
  // }

    return (
      <div>
        <Nav />
        <Container fluid>
          <Row>
            <Col size="md-2">
              <Link to="/">← Back to Authors</Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default ProfilePage;
