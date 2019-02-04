import React, { Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import API from "../utils/API";

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
    // axios
    //   .get(
    //     "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RiotSchmick?api_key=RGAPI-857f3576-0292-44a1-91f7-23773fea6e35",
    //     { crossdomain: true }
    //   )
    //   .then(res => res.json())
    //   .then(
    //     res => {
    //       console.log("res: ", res);
    //       // this.setState({
    //       //   profile: res
    //       // });
    //     },
    //     error => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   );
  }

  render() {
    return <SearchBar />;
  }
}

export default Home;

//process.env.RITOAPIKEY
