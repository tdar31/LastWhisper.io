import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import ProfileBody from "../ProfileBody";
import ProfileContainer from "../ProfileContainer";
import GameContainer from "../GameContainer";
import GameItem from "../GameItem";
import UserBanner from "../UserBanner";
import UserBody from "../UserBody";
import Particles from "react-particles-js";
// import background from "../../../public/images/backgrounds/background-1.png"
class ProfilePage extends Component {
  state = {
    profile: {},
    matches: [],
    rankedStats: [],
    theme: "",
    iterations: 3,
    matchData: [],
    selectedPlayerData: [], //This state doesn't get pushed to DB.  Only used to parse data
    modal: false
    // selectedButton: null,
  };

  componentWillMount() {
    //Get Player Data
    let queryUser = {
      username: this.props.match.params.username,
      region: this.props.match.params.region
    };
    // console.log("Submit button clicked-> queryUser: ", queryUser);
    API.getUser(queryUser)
      .then(res =>
        this.setState({ profile: res.data }, function onceStateUpdated() {
          this.getMatchHistory(this.state.profile.accountId);
          // this.getSummonerRankedData(this.state.profile.id);
        })
      )
      .catch(err => console.log(err));
    this.props.match.params.theme === "1"
      ? this.setState({ theme: "is-success" })
      : this.props.match.params.theme === "2"
      ? this.setState({ theme: "is-danger" })
      : this.props.match.params.theme === "3"
      ? this.setState({ theme: "is-info" })
      : this.setState({ theme: "is-success" });
  }

  componentDidMount() {
    //Binds this for button selection
    // this.setSelectedButton = this.setSelectedButton.bind(this);
  }

  // getSummonerRankedData = encryptedID => {
  //   let encryptData = {
  //     encryptId: encryptedID,
  //     region: this.props.match.params.region,
  //     dummyData: this.props.match.params.region
  //   };
  //   API.getSummonerRankedData(encryptData)
  //     .then(res => {
  //       this.setState({ rankedStats: res.data }, function onceStateUpdated() {
  //         // this.getMatchData(this.state.matches.matches[0].gameId.toString());
  //         console.log("this.state.rankedStats: ", this.state.rankedStats)
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  getMatchHistory = profile => {
    // console.log("GET MATCH HISTORY: ", this.state.profile);

    let userData = {
      accountId: profile,
      region: this.props.match.params.region
    };
    API.getMatchHistory(userData)
      .then(res => {
        this.setState(
          { matches: res.data },
          //API data for matches is async so use promises to force data to return in order
          async function asyncCall() {
            for (let i = 0; i < this.state.iterations; i++) {
              console.log("calling");
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
        resolve("resolved");
        this.getMatchData(gameId);
      }, 100);
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
            console.log("this.state.matchData: ", this.state.matchData);
            if (+this.state.matchData.length === +this.state.iterations) {
              this.findPlayerMatchStats();
            }
          }
        );
      })
      .catch(err => console.log(err));
  };

  findPlayerMatchStats = () => {
    //3x nested loop that looks through all return match data searching for participantIdentites where
    //the player's id matches the queried players account id then pushing those stats to
    //a new array for rendering in gameItems component in profile page

    //This iterates through all the matchData games returned by API which is now saved to the state
    for (let h = 0; h < this.state.matchData.length; h++) {
      console.log("h: ", h);
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
                    this.state.selectedPlayerData
                  );
                }
              );
            }
          }
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
