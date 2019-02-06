import React, { Component } from "react";
import API from "../utils/API";
import HomeContainer from "../components/HomeContainer";
import HomeBody from "../components/HomeBody";
import HomeFooter from "../components/HomeFooter";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import HomeFooterButton from "../components/HomeFooterButton";

class Home extends Component {
  state = {
    error: null,
    isLoaded: false,
    profile: {},
    matches: [],
    selectedButton: 1,
    inputValue: "",
    q: "",
  };

  componentDidMount() {
    this.setSelectedButton = this.setSelectedButton.bind(this);
  }

  setSelectedButton(id) {
    this.setState({ selectedButton: id });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleOnSubmit = event => {
    let queryUser = this.state.inputValue;
    console.log("Submit button clicked", queryUser);
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
          console.log("this.state.matches: ", this.state.matches);
        });
      })
      .catch(err => console.log(err));
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
            : "is-dark"
        }
      >
        <Nav />
        <HomeBody>
          <Banner />
          <SearchBar onClick={this.handleOnSubmit} value={this.state.inputValue}/>
        </HomeBody>
        <HomeFooter>
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
        </HomeFooter>
      </HomeContainer>
    );
  }
}

export default Home;
