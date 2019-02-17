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

  setSelectedButton(id) {
    this.setState({ selectedButton: id }, function() {
      // console.log("selectedBTN: ", this.state.selectedButton);
    });
  }

  handleOnSubmit = event => {
    // console.log("Submit button clicked");
    event.preventDefault();

    //Take in
    let queryUser = this.state.inputValue.trim();
    let selectedTheme = this.state.selectedButton;

    window.location.assign("summoner/" + queryUser + "/na/");
  };

  render() {
    return (
      <HomeContainer
        className={
          this.state.selectedButton === 1
            ? "is-success"
            : this.state.selectedButton === 2
            ? "is-danger"
            : this.state.selectedButton === 3
            ? "is-info"
            : "is-light"
        }
      >
        <Nav />
        <HomeBody>
          <Banner />
          <SearchBar
            onChange={this.handleInputChange}
            onClick={this.handleOnSubmit}
          >
            <Link
              to={{
                pathname: "/profile/" + this.state.profile.name,
                state: { profile: this.state.profile }
              }}
            >
              GO
            </Link>
          </SearchBar>
        </HomeBody>
        {/* <HomeFooter>
          <HomeFooterButton
            onClick={() => this.setSelectedButton(1)}
            className={
              this.state.selectedButton === 1 ? "thresh is-active" : "thresh"
            }
          >
            Thresh
          </HomeFooterButton>
          <HomeFooterButton
            onClick={() => this.setSelectedButton(2)}
            className={
              this.state.selectedButton === 2 ? "brand is-active" : "brand"
            }
          >
            Brand
          </HomeFooterButton>
          <HomeFooterButton
            onClick={() => this.setSelectedButton(3)}
            className={
              this.state.selectedButton === 3 ? "sejuani is-active" : "sejuani"
            }
          >
            Sejuani
          </HomeFooterButton>
        </HomeFooter> */}
      </HomeContainer>
    );
  }
}

export default Home;
