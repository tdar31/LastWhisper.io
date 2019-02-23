import React, { Component } from "react";
import API from "../../utils/API";
import ProfileNav from "../ProfileNav";
import ProfileBody from "../ProfileBody";
import ProfileContainer from "../ProfileContainer";
import GameContainer from "../GameContainer";
import GameItem from "../GameItem";
import UserBanner from "../UserBanner";
import UserBody from "../UserBody";
import RankedModule from "../RankedModule";
import UserModule from "../UserModule";
import UtilPanel from "../UtilPanel";
import Particles from "react-particles-js";

class ProfilePage extends Component {
  state = {
    profile: {},
    matches: [],
    rankedStats: [],
    theme: "",
    iterations: 5,
    matchData: [],
    selectedPlayerData: [], //This state doesn't get pushed to DB.  Only used to parse data
    modal: false,
    dbUsername: "",
    inputValue: "",
    loadingStatus: "active"
    // selectedButton: null,
  };

  componentWillMount() {
    //Checks if user is in DB first before hitting API
    //If found populates page with cached DB data for rate limiting
    //If not it calls getUser which hits riot API
    let queryUser = {
      username: this.props.match.params.username.toLowerCase(),
      region: this.props.match.params.region.toLowerCase()
    };
    API.findByUsername(queryUser).then(res =>
      // console.log("findByUsername =====> res.data: ", res.data[0])
      res.data[0] != undefined
        ? this.setState(
            {
              profile: res.data[0].profile,
              matches: res.data[0].matchData,
              selectedPlayerData: res.data[0].selectedPlayerData,
              rankedStats: res.data[0].rankedStats
            },
            function ree() {
              console.log("this.state post DB payload: ", this.state);
            }
          )
        : this.getUser()
    );
    //Get Player Data
    // this.props.match.params.theme === "1"
    //   ? this.setState({ theme: "is-success" })
    //   : this.props.match.params.theme === "2"
    //   ? this.setState({ theme: "is-danger" })
    //   : this.props.match.params.theme === "3"
    //   ? this.setState({ theme: "is-info" })
    //   : this.setState({ theme: "is-success" });
  }

  componentDidMount() {
    //Binds this for button selection
    // this.setSelectedButton = this.setSelectedButton.bind(this);
  }

  //Get basic account ID info from Riot API if username is not found in DB
  //encrypted ID's are used for all other API calls
  getUser = () => {
    let queryUser = {
      username: this.props.match.params.username,
      region: this.props.match.params.region.toLowerCase()
    };
    // console.log("Submit button clicked-> queryUser: ", queryUser);
    API.getUser(queryUser)
      .then(
        res =>
          //this is where you change the user name to lowercase as
          //a single word
          this.correctUsername(res.data)
        // this.setState({ profile: res.data }, function onceStateUpdated() {
        //   console.log("this.state.profile: ", this.state.profile);
        //   this.createProfile();
        // this.getMatchHistory(this.state.profile.accountId);
        // this.getSummonerRankedData(this.state.profile.id);
        // })
      )
      .catch(err => console.log(err));
  };

  //Sent all usernames to lowercase with no spaces
  correctUsername = profileData => {
    // console.log("profileData: ", profileData)
    let newProfile = Object.assign({}, profileData);
    newProfile.dbUsername = profileData.name
      .toLowerCase()
      .split(" ")
      .join("");
    // let newProfileObj = {
    //   profile: newProfile
    // };
    this.setState(
      {
        profile: newProfile
      },
      function() {
        this.createProfile();
      }
    );
  };

  //Creates new db Profile if user isn't in DB
  createProfile = () => {
    let profi = Object.assign({}, this.state.profile);
    let newProfileObj = {
      profile: profi
    };
    API.createProfile({ newProfileObj }).then(res => {
      // console.log("createProfile: ", res.data);
      this.getRankedData();
    });
  };

  //Get rankedData for summoner
  //will return empty array if summoner has never queued ranked
  getRankedData = () => {
    let rData = {
      username: this.state.profile.id,
      region: this.props.match.params.region
    };
    API.getRankedData(rData)
      .then(res => {
        this.setState({ rankedStats: res.data }, function onceStateUpdated() {
          // console.log("this.state.rankedStats: ", this.state.rankedStats);
          this.parseRankedData();
          // this.getMatchHistory();
        });
      })
      .catch(err => console.log(err));
  };

  //queueType
  //position
  //tier
  //rank
  //wins
  //losses
  //

  parseRankedData = () => {
    for (let i = 0; i < this.state.rankedStats.length; i++) {
      let rankedStatsArray = this.state.rankedStats[i];
      // console.log("rankedStatsArray: ", rankedStatsArray);

      //Calculates total Games played per position
      let playerRanked = Object.assign({}, this.state.rankedStats[i]);
      playerRanked.totalGames = +playerRanked.wins + +playerRanked.losses;

      //Updates Queue Type
      if (playerRanked.queueType === "RANKED_SOLO_5x5") {
        playerRanked.queueType = "Ranked Solo";
      }

      // Updates position type
      //**Leaving this for now.  Need to figure out what "APEX" is as Top and
      //mid laners can be both APEX and doesn't seem to be a way to figure out
      //the difference between them**
      // if (playerRanked.position === "TOP") {
      //   playerRanked.position = "Top";
      // }

      // if (playerRanked.position === "MIDDLE") {
      //   playerRanked.position = "Middle";
      // }

      // if (playerRanked.position === "BOTTOM") {
      //   playerRanked.position = "ADC";
      // }

      // //'NONE' still a bit of mystery going with Jungle for now
      // if (
      //   playerRanked.position === "JUNGLE" ||
      //   playerRanked.position === "NONE"
      // ) {
      //   playerRanked.position = "Jungle";
      // }

      // if (playerRanked.position === "UTILITY") {
      //   playerRanked.position = "Support";
      // }

      //Update Ranked Rank/Tier
      //This can definitely be refactored
      //On the todo list for sure
      if (playerRanked.tier === "IRON") {
        playerRanked.tier = "Iron";
      }

      if (playerRanked.tier === "BRONZE") {
        playerRanked.tier = "Bronze";
      }

      if (playerRanked.tier === "SILVER") {
        playerRanked.tier = "Silver";
      }

      if (playerRanked.tier === "GOLD") {
        playerRanked.tier = "Gold";
      }

      if (playerRanked.tier === "PLATINUM") {
        playerRanked.tier = "Platinum";
      }

      if (playerRanked.tier === "DIAMOND") {
        playerRanked.tier = "Diamond";
      }

      if (playerRanked.tier === "MASTER") {
        playerRanked.tier = "Master";
        // playerRanked.rank = "";
      }

      if (playerRanked.tier === "GRANDMASTER") {
        playerRanked.tier = "Grandmaster";
        // playerRanked.rank = "";
      }

      if (playerRanked.tier === "CHALLENGER") {
        playerRanked.tier = "Challenger";
        // playerRanked.rank = "";
      }

      this.state.rankedStats[i] = playerRanked;
      console.log("POST: ", this.state.rankedStats[i]);
    }
    this.getMatchHistory();
  };

  getMatchHistory = () => {
    // console.log("GET MATCH HISTORY: ", this.state.profile);
    let userData = {
      accountId: this.state.profile.accountId,
      region: this.props.match.params.region
    };
    API.getMatchHistory(userData)
      .then(res => {
        this.setState(
          {
            matches: res.data,
            matchData: []
          },
          //API data for matches is async so use promises to force data to return in order
          async function asyncCall() {
            for (let i = 0; i < this.state.iterations; i++) {
              // console.log("calling");
              var result = await this.resolveAfter10thofSecond(
                this.state.matches.matches[i].gameId.toString()
              );
              console.log(result);
              // expected output: 'resolved'
            }
          }
        );
      })
      .catch(err => console.log(err));
  };

  resolveAfter10thofSecond = gameId => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        this.getMatchData(gameId);
      }, 300);
    });
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
            console.log(
              "this.state.matchData.length: ",
              this.state.matchData.length
            );
            if (+this.state.matchData.length === +this.state.iterations) {
              this.findPlayerMatchStats();
            }
          }
        );
      })
      .catch(err => console.log(err));
  };

  findPlayerMatchStats = () => {
    //Oof here we go
    //3x nested loop that looks through all return match data searching for participantIdentites where
    //the player's id matches the queried players account id then pushing those stats to
    //a new array for rendering in gameItems component in profile page
    //Another function on the list that definitely will revisit in terms of
    //refactoring but leaving for now since it works

    //This iterates through all the matchData games returned by API which is now saved to the state
    for (let h = 0; h < this.state.matchData.length; h++) {
      // console.log("h: ", h);
      let matchDataArray = this.state.matchData[h];
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
          let playerId = matchDataArray.participantIdentities[i].participantId;
          // console.log("playerId: ", playerId);
          //Once the participant matching the queried user and their corresponding participantMatchID is found
          //this loop iterates through the matchData searching for the participantMatchID then pushing
          //the data where the participantMatchID === to a new array to be pushed down to game item
          for (let j = 0; j < 10; j++) {
            if (matchDataArray.participants[j].participantId === playerId) {
              let compiledPlayerData = matchDataArray.participants[j];
              compiledPlayerData.gameCreation = matchDataArray.gameCreation;
              compiledPlayerData.gameDuration = matchDataArray.gameDuration;
              compiledPlayerData.gameMode = matchDataArray.gameMode;
              compiledPlayerData.gameType = matchDataArray.gameType;
              compiledPlayerData.gameVersion = matchDataArray.gameVersion;
              compiledPlayerData.queueId = matchDataArray.queueId;
              compiledPlayerData.seasonId = matchDataArray.seasonId;
              compiledPlayerData.teams = matchDataArray.teams;
              compiledPlayerData.platformId = matchDataArray.platformId;
              console.log("REEEEEEEEEEEEEEEEEEEEEEEEEEEE");

              this.setState(
                state => {
                  //Pushing found match stats specific to player to new array which is passed down as props to game item
                  const selectedPlayerData = [
                    ...state.selectedPlayerData,
                    compiledPlayerData
                  ];
                  return {
                    selectedPlayerData
                  };
                },
                function onceStateUpdated() {
                  console.log(
                    "this.state.selectedPlayerData: ",
                    this.saveMatchData()
                  );
                }
              );
            }
          }
        }
      }
    }
    // console.log("end of findPlayerMatchStats", this.state.selectedPlayerData);
  };

  saveMatchData = () => {
    let mData = Object.assign({}, this.state);
    // mData.selectedPlayerData = [];
    mData.matchData = [];
    let matchDat = this.state.matches.matches;
    //Keeps only the 50 most recent matches instead of 100 to lower DB usage
    matchDat.splice(49, 50);
    mData.matches.matches = matchDat;
    // console.log("matchDat: ", mData.selectedPlayerData);
    API.saveMatchData(mData).then(console.log("Postsave: ", this.state));
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  setSelectedButton(id) {
    this.setState({ selectedButton: id }, function() {
      console.log("selectedBTN: ", this.state.selectedButton);
    });
  }

  handleOnUpdateClick = event => {
    event.preventDefault();
    console.log("Update Button Clicked");
    this.setState(
      {
        loadingStatus: "loading"
      },
      function resetLoading() {
        this.triggerUpdateClick();
        this.triggerLoader();
      }
    );
  };

  triggerLoader = () => {
    setTimeout(
      function() {
        this.setState({
          loadingStatus: "active"
        });
      }.bind(this),
      5000
    );
  };

  triggerUpdateClick = () => {
    //reset SelectedMatchData
    // console.log("---TRIGGERUPDATECLICK---");
    setTimeout(
      function() {
        this.setState(
          {
            selectedPlayerData: []
          },
          function afterStateUpdated() {
            this.getRankedData();
          }
        );
      }.bind(this),
      3000
    );
  };

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
    window.location = "http://localhost:3000/summoner/" + queryUser + "/NA";
  };

  render() {
    return (
      <div>
        {/* <Particles
          params={{
            particles: {
              number: {
                value: 35,
                density: { enable: true, value_area: 800 }
              },
              color: { value: "#ffffff" },
              shape: {
                type: "edge",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 1 }
                // image: { src: "img/github.svg", width: 100, height: 100 }
              },
              opacity: {
                value: 0.21646062821684559,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3.0,
                random: false
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 5,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 641.3648243462092
                }
              }
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: { enable: false, mode: "bubble" },
                //   onclick: { enable: false, mode: "push" },
                resize: true
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
              }
            }
          }}
        /> */}
        <ProfileContainer className={this.state.theme}>
          <ProfileNav
            onChange={this.handleInputChange}
            onClick={this.handleOnSubmit}
          />
          <ProfileBody>
            <UserBanner>
              <UserModule
                username={this.state.profile.name}
                level={this.state.profile.summonerLevel}
                region={this.props.match.params.region}
                profileIcon={[
                  `/images/profileicon/${this.state.profile.profileIconId}.png`
                ].join(" ")}
                // handleOnUpdateClick={this.handleOnUpdateClick}
              />
              {this.state.rankedStats.map((rankedPlayerData, index) => (
                <RankedModule
                  key={index}
                  leaguePoints={rankedPlayerData.leaguePoints}
                  losses={rankedPlayerData.losses}
                  wins={rankedPlayerData.wins}
                  totalGames={rankedPlayerData.totalGames}
                  position={rankedPlayerData.position}
                  queueType={rankedPlayerData.queueType}
                  tier={rankedPlayerData.tier}
                  rank={rankedPlayerData.rank}
                  rankIcon={[
                    `/images/ranked/${rankedPlayerData.tier}_${
                      rankedPlayerData.rank
                    }.png`
                  ].join(" ")}
                />
              ))}
            </UserBanner>
            <UtilPanel
              onClick={this.handleOnUpdateClick}
              type={this.state.loadingStatus}
            />
            <UserBody>
              {" "}
              <GameContainer>
                {this.state.selectedPlayerData.map((playerData, index) => (
                  <GameItem
                    key={index}
                    gameCreation={playerData.gameCreation}
                    gameDuration={playerData.gameDuration}
                    gameMode={playerData.gameMode}
                    gameType={playerData.gameType}
                    platformId={playerData.platformId}
                    queueId={playerData.queueId}
                    seasonId={playerData.seasonId}
                    championIdRAW={playerData.championId.toString()}
                    championId={[
                      `/images/tiles/${playerData.championId}.jpg`
                    ].join(" ")}
                    spell1Id={[
                      `/images/summonerspell/${playerData.spell1Id}.png`
                    ].join(" ")}
                    spell1RawId={playerData.spell1Id.toString()}
                    spell2Id={[
                      `/images/summonerspell/${playerData.spell2Id}.png`
                    ].join(" ")}
                    spell2RawId={playerData.spell2Id.toString()}
                    assists={playerData.stats.assists}
                    champLevel={playerData.stats.champLevel}
                    deaths={playerData.stats.deaths}
                    goldEarned={playerData.stats.goldEarned}
                    goldSpent={playerData.stats.goldSpent}
                    item0={[`/images/item/${playerData.stats.item0}.png`].join(
                      " "
                    )}
                    item0RawId={playerData.stats.item0.toString()}
                    item1={[`/images/item/${playerData.stats.item1}.png`].join(
                      " "
                    )}
                    item1RawId={playerData.stats.item1.toString()}
                    item2={[`/images/item/${playerData.stats.item2}.png`].join(
                      " "
                    )}
                    item2RawId={playerData.stats.item2.toString()}
                    item3={[`/images/item/${playerData.stats.item3}.png`].join(
                      " "
                    )}
                    item3RawId={playerData.stats.item3.toString()}
                    item4={[`/images/item/${playerData.stats.item4}.png`].join(
                      " "
                    )}
                    item4RawId={playerData.stats.item4.toString()}
                    item5={[`/images/item/${playerData.stats.item5}.png`].join(
                      " "
                    )}
                    item5RawId={playerData.stats.item5.toString()}
                    item6={[`/images/item/${playerData.stats.item6}.png`].join(
                      " "
                    )}
                    item6RawId={playerData.stats.item6.toString()}
                    kills={playerData.stats.kills}
                    win={playerData.stats.win}
                    role={playerData.timeline.role}
                    perkPrimaryStyle={[
                      `/images/perk-images/Styles/${
                        playerData.stats.perkPrimaryStyle
                      }.png`
                    ].join(" ")}
                    perkPrimaryStyleRawId={playerData.stats.perkPrimaryStyle}
                    perkSubStyle={[
                      `/images/perk-images/Styles/${
                        playerData.stats.perkSubStyle
                      }.png`
                    ].join(" ")}
                    perkSubStyleRawId={playerData.stats.perkSubStyle}
                    totalMinionsKilled={playerData.stats.totalMinionsKilled}
                    neutralMinionsKilled={playerData.stats.neutralMinionsKilled}
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
