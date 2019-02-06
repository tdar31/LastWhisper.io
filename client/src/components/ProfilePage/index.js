import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "../Grid";
import ProfileNav from "../ProfileNav";
import ProfileBody from "../ProfileBody";
import ProfileContainer from "../ProfileContainer";
import API from "../../utils/API";

class ProfilePage extends Component {
  state = {
    profile: {},
    matches: [],
    selectedButton: null,
    theme: ""
  };

  componentWillMount() {
    this.props.match.params.theme === "1"
      ? this.setState({ theme: "is-success" })
      : this.props.match.params.theme === "2"
      ? this.setState({ theme: "is-danger" })
      : this.props.match.params.theme === "3"
      ? this.setState({ theme: "is-info" })
      : this.setState({ theme: "is-dark" });
  }

  componentDidMount() {
    //Binds this for button selection
    this.setSelectedButton = this.setSelectedButton.bind(this);

    //Get Player Data
    let queryUser = this.props.match.params.username
    console.log("Submit button clicked-> queryUser: ", queryUser);
    API.getUser(queryUser)
      .then(res =>
        this.setState({ profile: res.data }, function onceStateUpdated() {
          this.getMatchHistory(this.state.profile);
        })
      )
      .catch(err => console.log(err));
  }

  getMatchHistory = profile => {
    console.log("GET MATCH HISTORY: ", this.state.profile);
    API.getMatchHistory(profile)
      .then(res => {
        this.setState({ matches: res.data }, function onceStateUpdated() {
          console.log("this.state.matches: ", this.state.matches);
        });
      })
      .catch(err => console.log(err));
  };

  setSelectedButton(id) {
    this.setState({ selectedButton: id }, function() {
      console.log("selectedBTN: ", this.state.selectedButton);
    });
  }

  render() {
    return (
      <div>
        <ProfileContainer className={this.state.theme}>
          <ProfileNav />
          <ProfileBody>
          </ProfileBody>
        </ProfileContainer>
      </div>
    );
  }
}

export default ProfilePage;
