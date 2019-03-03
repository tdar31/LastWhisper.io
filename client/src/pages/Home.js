import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import HomeContainer from "../components/HomeContainer";
import HomeBody from "../components/HomeBody";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";

class Home extends Component {
  state = {
    profile: {},
    matches: [],
    selectedButton: 1,
    inputValue: "",
    region: "",
    isOpen: false
  };

  componentDidMount() {
    this.setSelectedButton = this.setSelectedButton.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { value } = event.target;

    let typedValue = value.split(" ").join("");
    // Updating the input's state
    this.setState(
      {
        inputValue: typedValue
      },
      function onceStateUpdated() {
        // console.log("this.state.inputValue: ", this.state.inputValue);
      }
    );
  };

  handleOnSubmit = event => {
    // console.log("Submit button clicked");
    event.preventDefault();

    //Take in
    let queryUser = this.state.inputValue.trim().toLowerCase();
    // let region = this.state.selectedButton.toUpperCase();

    window.location.assign("summoner/" + queryUser + "/NA/");
  };

  setSelectedButton(id) {
    this.setState({ selectedButton: id }, function() {
      // console.log("selectedBTN: ", this.state.selectedButton);
    });
  }

  render() {
    return (
      <HomeContainer>
        <Nav />
        <HomeBody>
          <Banner />
          <SearchBar
            onChange={this.handleInputChange}
            onClick={this.handleOnSubmit}
          />
        </HomeBody>
      </HomeContainer>
    );
  }
}

export default Home;
