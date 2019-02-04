import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
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
      <div>
        <SearchBar />
        <Button onClick={this.handleOnSubmit}/>
      </div>
    );
  }
}

export default Home;

//process.env.RITOAPIKEY
