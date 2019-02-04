import React, { Component } from "react";
import API from "../utils/API";
import HomeContainer from "../components/HomeContainer";
import HomeBody from "../components/HomeBody";
import HomeFooter from "../components/HomeFooter";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

class Home extends Component {
  state = {
    error: null,
    isLoaded: false,
    profile: {}
  };

  componentDidMount() {
    API.getTEST()
      .then(res => console.log("DIDMOUNT: ", res.data))
      .catch(err => console.log(err));
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log("Submit button clicked");
  };

  render() {
    return (
      <HomeContainer>
        <Nav />
        <HomeBody>
          <SearchBar />
        </HomeBody>
        <HomeFooter />
      </HomeContainer>
    );
  }
}

export default Home;