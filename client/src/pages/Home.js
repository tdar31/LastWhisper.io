import React, { Component } from "react";
import API from "../utils/API";
import HomeContainer from "../components/HomeContainer";
import HomeBody from "../components/HomeBody";
import HomeFooter from "../components/HomeFooter";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import Button from "../components/Button";

class Home extends Component {
  state = {
    error: null,
    isLoaded: false,
    profile: {},
    matches: []
  };

  componentDidMount() {}

  handleOnSubmit = event => {
    console.log("Submit button clicked");
    event.preventDefault();
    API.getUser()
      .then(res =>
        this.setState({ profile: res.data }, function onceStateUpdated() {
          this.getMatchHistory(this.state.profile);
        })
      )
      .catch(err => console.log(err));
  };

  getMatchHistory = profile => {
    console.log("GET MATCH HISTORY: ", this.state.profile);
    API.getMatchHistory(profile)
      .then(res => {
        this.setState({ matches: res.data }, function onceStateUpdated() {
        console.log("this.state.matches: ", this.state.matches)
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <HomeContainer>
        <Nav />
        <HomeBody>
          <Banner />
          <SearchBar onClick={this.handleOnSubmit} />
        </HomeBody>
        <HomeFooter />
      </HomeContainer>
    );
  }
}

export default Home;
