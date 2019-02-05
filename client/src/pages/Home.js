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
    selectedButton: null
  };

  componentDidMount() {
    this.setSelectedButton = this.setSelectedButton.bind(this);
  }

  setSelectedButton(id){
    this.setState({selectedButton: id});
  }

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
          console.log("this.state.matches: ", this.state.matches);
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
        <HomeFooter>
          <HomeFooterButton className={this.state.selectedButton === 1? "thresh is-active" : "thresh"} onClick={() => this.setSelectedButton(1)}>Thresh</HomeFooterButton>
          <HomeFooterButton className={this.state.selectedButton === 2? "brand is-active" : "brand"} onClick={() => this.setSelectedButton(2)}>Brand</HomeFooterButton>
          <HomeFooterButton className={this.state.selectedButton === 3? "sejuani is-active" : "sejuani"} onClick={() => this.setSelectedButton(3)}>Sejuani</HomeFooterButton>
        </HomeFooter>
      </HomeContainer>
    );
  }
}

export default Home;