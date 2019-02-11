import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import ProfileBody from "../ProfileBody";
import ProfileContainer from "../ProfileContainer";
import GameContainer from "../GameContainer";
import GameItem from "../GameItem";
import UserBanner from "../UserBanner";
import UserBody from "../UserBody";
const champJsonData = require("../../assets/jsonData/champions.json");

class ProfilePage extends Component {
  state = {
    profile: {},
    matches: [],
    // selectedButton: null,
    theme: "",
    matchData: [],
    selectedPlayerData: [] //This state doesn't get pushed to DB.  Only used to parse data
    // test: "../../assets/images/champion/555.png"
  };

  componentWillMount() {
    this.props.match.params.theme === "1"
      ? this.setState({ theme: "is-success" })
      : this.props.match.params.theme === "2"
      ? this.setState({ theme: "is-danger" })
      : this.props.match.params.theme === "3"
      ? this.setState({ theme: "is-info" })
      : this.setState({ theme: "is-danger" });

    console.log(champJsonData);
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
          // console.log(
          //   "this.state.matches: ",
          //   this.state.matches.matches[0].gameId
          // );
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
        this.setState(
          state => {
            //Pushing found match stats specific to player to new array which is passed down as props to game item
            const matchData = [...state.matchData, res.data];
            return {
              matchData
            };
          },
          function onceStateUpdated() {
            // console.log(
            //   "this.state.matchData: ",
            //   this.state.matchData[0].participantIdentities

            // );
            this.findPlayerMatchStats();
          }
        );
        // this.setState({ matchData: res.data }, function onceStateUpdated() {
        //   console.log("this.state.matchData: ", this.state.matchData);
        //   this.findPlayerMatchStats();
        // });
      })
      // .then(this.findPlayerMatchStats())
      .catch(err => console.log(err));
  };

  findPlayerMatchStats = () => {
    //3x nested loop that looks through all return match data searching for participantIdentites where
    //the player's id matches the queried players account id then pushing those stats to
    //a new array for rendering in gameItems component in profile page


    //This iterates through all the matchData games returned by API which is now saved to the state
    for (let h = 0; h < this.state.matchData.length; h++) {
      let matchDataArray = this.state.matchData[h]
      console.log("matchDataArray: ", matchDataArray);
      //Once the matchData is selected this loop goes through and search for the match paricipant
      //where the Identity matches the profile.accountId (queried users ID)
      for (
        let i = 0;
        i < 10; //Can't be more that 10 people in a queue
        i++
      ) {
        if (
          matchDataArray.participantIdentities[i].player.accountId ===
          this.state.profile.accountId
        ) {
          let playerId = matchDataArray.participantIdentities[i]
            .participantId;
          //Once the participant matching the queried user and their corresponding participantMatchID is found
          //this loop iterates through the matchData searching for the participantMatchID then pushing
          //the data where the participantMatchID === to a new array to be pushed down to game item
          for (let j = 0; j < 10; j++) {
            if (matchDataArray.participants[j].participantId === playerId)
              this.setState(
                state => {
                  //Pushing found match stats specific to player to new array which is passed down as props to game item
                  const selectedPlayerData = [
                    ...state.selectedPlayerData,
                    matchDataArray.participants[j]
                  ];
                  return {
                    selectedPlayerData
                  };
                },
                function onceStateUpdated() {
                  console.log(
                    "this.state.selectedPlayerData: ",
                    this.state.selectedPlayerData
                  );
                }
              );
          }
        }
      }
    }
  };


  //Not needed for now but will likely need in the future?
  //Saving it for now just incase I need it for later
  // parseDataId = () => {
  //   //This is "decrypting" some of the returned match data that is store in number id's instead of strings such as champ names
  //   //items etc.  The following loops through a local JSON file with all the info include the parings and updates.  EX champId: 555 = Pyke // spell1Id: 14 = Ignite
  //   for (let i = 0; i < this.state.selectedPlayerData.length; i++) {
  //     for (let j = 0; j < champJsonData.length; j++) {
  //       if (this.state.selectedPlayerData[i].champId === champJsonData[j].key) {
  //         //This process of creating a duplicate object to update these locations
  //         //since react does not like updating nested objects within a state
  //         let duplicateObj = Object.assign({}, this.state.selectedPlayerData[i]);
  //         duplicateObj.champId = champJsonData[i].name;

  //         this.setState({
  //           selectedPlayerData: duplicateObj
  //         },
  //         function onceStateUpdated() {
  //           console.log(
  //             "AFTER UPDATEthis.state.selectedPlayerData: ",
  //             this.state.selectedPlayerData
  //           );
  //         })
  //       }
  //     }
  //   }
  // };

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
              profileIcon={[
                `/images/profileicon/${this.state.profile.profileIconId}.png`
              ].join(" ")}
            />
            <UserBody>
              <GameContainer>
                {this.state.selectedPlayerData.map(playerData => (
                  <GameItem
                    championId={[
                      `/images/champion/${playerData.championId}.png`
                    ].join(" ")}
                    spell1Id={[
                      `/images/summonerspell/${playerData.spell1Id}.png`
                    ].join(" ")}
                    spell2Id={[
                      `/images/summonerspell/${playerData.spell2Id}.png`
                    ].join(" ")}
                    assists={playerData.stats.assists}
                    champLevel={playerData.stats.champLevel}
                    deaths={playerData.stats.deaths}
                    goldEarned={playerData.stats.goldEarned}
                    goldSpent={playerData.stats.goldSpent}
                    item0={[`/images/item/${playerData.stats.item0}.png`].join(
                      " "
                    )}
                    item1={[`/images/item/${playerData.stats.item1}.png`].join(
                      " "
                    )}
                    item2={[`/images/item/${playerData.stats.item2}.png`].join(
                      " "
                    )}
                    item3={[`/images/item/${playerData.stats.item3}.png`].join(
                      " "
                    )}
                    item4={[`/images/item/${playerData.stats.item4}.png`].join(
                      " "
                    )}
                    item5={[`/images/item/${playerData.stats.item5}.png`].join(
                      " "
                    )}
                    item6={[`/images/item/${playerData.stats.item6}.png`].join(
                      " "
                    )}
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
