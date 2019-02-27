import React, { Component } from "react";
import "./style.css";
import MatchPlayerPanel from "../MatchPlayerPanel";
const champJsonData = require("../../assets/jsonData/en_US/championFull.json");
const itemJsonData = require("../../assets/jsonData/en_US/item.json");
const summonerJsonData = require("../../assets/jsonData/en_US/summoner.json");
const runesJsonData = require("../../assets/jsonData/en_US/runesReforged.json");

class MatchPlayerInfo extends Component {
  state = {
    isData: false,
    participantIdentities: [],
    participants: [],
    teams: [],
    itemKeyPairs: [],
    champKeyPairs: [],
    summonerKeyPairs: []
  };

  componentWillMount() {
    //Finds all items and pairs them with their ID in an array of objects for parsing through
    //For-in loop since json data provided by Riot is a single nested object
    for (var key in itemJsonData.data) {
      // console.log(key);
      let itemKeysArr = itemJsonData.data[key].name;
      // console.log(itemKeysArr);
      let item = {
        id: key,
        name: itemKeysArr
      };
      // console.log(item);

      this.setState(state => {
        //Pushing found match stats specific to player to new array which is passed down as props to game item
        const itemKeyPairs = [...state.itemKeyPairs, item];
        return {
          itemKeyPairs
        };
      });
    }

    //Swaps ID of champ to their name
    //For-in loop since json data provided by Riot is a single nested object
    for (var key in champJsonData.keys) {
      // console.log(key);
      let champKeysArr = champJsonData.keys[key];
      // console.log(champKeysArr);
      let item = {
        id: key,
        name: champKeysArr
      };
      // console.log(item);

      this.setState(state => {
        //Pushing found match stats specific to player to new array which is passed down as props to game item
        const champKeyPairs = [...state.champKeyPairs, item];
        return {
          champKeyPairs
        };
      });
    }
    //
    //Swap Summoner ID with names
    for (var key in summonerJsonData.data) {
      // console.log(key);
      let summonerKeysArr = summonerJsonData.data[key].key;
      let summonerKeysName = summonerJsonData.data[key].name;
      // console.log(summonerKeysArr);
      // console.log(summonerKeysName);
      let sums = {
        id: summonerKeysArr,
        name: summonerKeysName
      };
      // console.log(sums);
      this.setState(state => {
        //Pushing found match stats specific to player to new array which is passed down as props to game item
        const summonerKeyPairs = [...state.summonerKeyPairs, sums];
        return {
          summonerKeyPairs
        };
      });
    }
  }

  componentDidUpdate() {
    if (this.state.isData === false) {
      this.setState(
        {
          isData: true,
          participantIdentities: this.props.participantIdentities,
          participants: this.props.participants,
          teams: this.props.teams
        },
        function MatchPlayerInfo() {
          // console.log("MatchPlayerInfo: ", this.state);
          this.parse();
        }
      );
    }
  }

  parse = () => {
    // console.log("inside parse()");
    let tempParticipantsArr = [];
    for (let i = 0; i < this.state.participants.length; i++) {
      for (let j = 0; j < this.state.champKeyPairs.length; j++) {
        // console.log(this.state.champKeyPairs[j].id);
        if (
          this.state.participants[i].championId.toString() ===
          this.state.champKeyPairs[j].id
        ) {
          // console.log(this.state.champKeyPairs[j].name)
          let tempParticipant = Object.assign({}, this.state.participants[i]);
          tempParticipant.championName = this.state.champKeyPairs[j].name;
          tempParticipantsArr.push(tempParticipant);
          if (tempParticipantsArr.length === 10) {
            this.setState({
              participants: tempParticipantsArr
            }, function() {
              // console.log("postChampUpdate: ", this.state.participants)
            })
          }
        }
      }
    }
  };

  render() {
    return (
      <div className="MatchPlayerInfo">
        {this.state.participants.map((partData, index) => (
          <MatchPlayerPanel
            key={index}
            championId={[`/images/tiles/${partData.championId}.jpg`].join(" ")}
            championName={partData.championName}
            playerLevel={partData.stats.champLevel}
            spell1Id={[`/images/summonerspell/${partData.spell1Id}.png`].join(
              " "
            )}
            spell2Id={[`/images/summonerspell/${partData.spell2Id}.png`].join(
              " "
            )}
            perkPrimaryStyle={[
              `/images/perk-images/Styles/${
                partData.stats.perkPrimaryStyle
              }.png`
            ].join(" ")}
            perkSubStyle={[
              `/images/perk-images/Styles/${partData.stats.perkSubStyle}.png`
            ].join(" ")}
            item0={[`/images/item/${partData.stats.item0}.png`].join(" ")}
            item1={[`/images/item/${partData.stats.item1}.png`].join(" ")}
            item2={[`/images/item/${partData.stats.item2}.png`].join(" ")}
            item3={[`/images/item/${partData.stats.item3}.png`].join(" ")}
            item4={[`/images/item/${partData.stats.item4}.png`].join(" ")}
            item5={[`/images/item/${partData.stats.item5}.png`].join(" ")}
            item6={[`/images/item/${partData.stats.item6}.png`].join(" ")}
          />
        ))}
      </div>
    );
  }
}

export default MatchPlayerInfo;
