import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import ProfileBody from "../ProfileBody";
import ProfileContainer from "../ProfileContainer";
import GameContainer from "../GameContainer";
import GameItem from "../GameItem";
import UserBanner from "../UserBanner";
import UserBody from "../UserBody";

class ProfilePage extends Component {
  state = {
    profile: {},
    matches: [],
    // selectedButton: null,
    theme: "",
    matchData: {},
    selectedPlayerData: [] //This state doesn't get pushed to DB.  Only used to parse data
  };

  componentWillMount() {
    this.props.match.params.theme === "1"
      ? this.setState({ theme: "is-success" })
      : this.props.match.params.theme === "2"
      ? this.setState({ theme: "is-danger" })
      : this.props.match.params.theme === "3"
      ? this.setState({ theme: "is-info" })
      : this.setState({ theme: "is-danger" });
  }

  componentDidMount() {
    //Binds this for button selection
    // this.setSelectedButton = this.setSelectedButton.bind(this);

    //Get Player Data
    let queryUser = {
      username: this.props.match.params.username,
      region: this.props.match.params.region
    };
    console.log("Submit button clicked-> queryUser: ", queryUser);
    API.getUser(queryUser)
      .then(res =>
        this.setState({ profile: res.data }, function onceStateUpdated() {
          this.getMatchHistory(this.state.profile.accountId);
        })
      )
      .catch(err => console.log(err));
  }

  getMatchHistory = profile => {
    console.log("GET MATCH HISTORY: ", this.state.profile);

    let userData = {
      accountId: profile,
      region: this.props.match.params.region
    };
    API.getMatchHistory(userData)
      .then(res => {
        this.setState({ matches: res.data }, function onceStateUpdated() {
          console.log(
            "this.state.matches: ",
            this.state.matches.matches[0].gameId
          );
          this.getMatchData(this.state.matches.matches[0].gameId.toString());
        });
      })
      .catch(err => console.log(err));
  };

  getMatchData = gameId => {
    let matchData = {
      accountId: this.state.profile.accountId,
      region: this.props.match.params.region,
      matchData: gameId
    };

    API.getMatchData(matchData)
      .then(res => {
        this.setState({ matchData: res.data }, function onceStateUpdated() {
          console.log("this.state.matchData: ", this.state.matchData);
          this.findPlayerMatchStats();
        });
      })
      .catch(err => console.log(err));
  };

  findPlayerMatchStats = () => {
    //Loop that looks through all return match data searching for participantIdentites where
    //the player's id matches the queried players account id then pushing those stats to a new array for rendering
    for (
      let i = 0;
      i < 10; //Can't be more that 10 people in a queue
      i++
    ) {
      if (
        this.state.matchData.participantIdentities[i].player.accountId ===
        this.state.profile.accountId
      ) {
        let playerId = this.state.matchData.participantIdentities[i]
          .participantId;
        console.log(playerId);
        for (let i = 0; i < 10; i++) {
          if (this.state.matchData.participants[i].participantId === playerId)
          this.setState( state => {
            const selectedPlayerData = [...state.selectedPlayerData, this.state.matchData.participants[i]] 
            return {
              selectedPlayerData
            }
          }, function onceStateUpdated() {
            console.log(
              "this.state.selectedPlayerData: ",
              this.state.selectedPlayerData
            );
          })
        }
      }
    }
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
          <Nav />
          <ProfileBody>
            <UserBanner
              username={this.state.profile.name}
              level={this.state.profile.summonerLevel}
              region={this.props.match.params.region}
            />
            <UserBody>
              <GameContainer>
                {this.state.selectedPlayerData.map(playerData => (
                  <GameItem
                    championId={playerData.championId}
                    spell1Id={playerData.spell1Id}
                    spell2Id={playerData.spell2Id}
                    assists={playerData.stats.assists}
                    champLevel={playerData.stats.champLevel}
                    deaths={playerData.stats.deaths}
                    goldEarned={playerData.stats.goldEarned}
                    goldSpent={playerData.stats.goldSpent}
                    item0={playerData.stats.item0}
                    item1={playerData.stats.item1}
                    item2={playerData.stats.item2}
                    item3={playerData.stats.item3}
                    item4={playerData.stats.item4}
                    item5={playerData.stats.item5}
                    item6={playerData.stats.item6}
                    kills={playerData.stats.kills}
                    win={playerData.stats.win}
                    role={playerData.timeline.role}
                  />
                ))}
              </GameContainer>
            </UserBody>
          </ProfileBody>
        </ProfileContainer>
      </div>
    );
  }
}

export default ProfilePage;
