import React, { Component } from "react";
import moment from "moment";
import "./style.css";
import GameModuleMatchInfo from "../GameModuleMatchInfo";
import GameModuleChampInfo from "../GameModuleChampInfo";
import GameModuleStatsInfo from "../GameModuleStatsInfo";
import GameModuleItemInfo from "../GameModuleItemInfo";
import GameModuleFullMatchInfo from "../GameModuleFullMatchInfo";
const champJsonData = require("../../assets/jsonData/en_US/championFull.json");
const itemJsonData = require("../../assets/jsonData/en_US/item.json");
const summonerJsonData = require("../../assets/jsonData/en_US/summoner.json");
const runesJsonData = require("../../assets/jsonData/en_US/runesReforged.json");

class GameItem extends Component {
  state = {
    gameCreationDate: "",
    gameCreationTime: "",
    gameDuration: "",
    gameId: "",
    win: "",
    deaths: "",
    KDA: "",
    champName: "",
    item0: "",
    gameMode: "",
    gameType: "",
    queueId: "",
    champKeyPairs: [],
    itemKeyPairs: [],
    summonerKeyPairs: [],
    itemArray: [],
    item0: "",
    item1: "",
    item2: "",
    item3: "",
    item4: "",
    item5: "",
    item6: "",
    spell1: "",
    spell2: "",
    perkPrimary: "",
    perkSub: ""
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

    //
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

  componentDidMount() {
    // console.log(this.state.perkPrimary, this.state.perkSub)
    //
    // Swaps champ ID number with champ name
    for (let i = 0; i < this.state.champKeyPairs.length; i++) {
      if (this.state.champKeyPairs[i].id === this.props.championIdRAW) {
        this.setState({
          champName: this.state.champKeyPairs[i].name
        });
      }
    }
    //
    // Swaps item ID number with item name
    //I cannot find a better way to do this as the I can't make the state be part of the
    //iterator and have to do it one at at time.
    //Gonna look into this so more later but for now its
    //gotta be hardcoded with 6 if statements
    for (let i = 0; i < this.state.itemKeyPairs.length; i++) {
      if (this.state.itemKeyPairs[i].id === this.props.item0RawId) {
        this.setState({
          item0: this.state.itemKeyPairs[i].name
        });
      }
      if (this.state.itemKeyPairs[i].id === this.props.item1RawId) {
        this.setState({
          item1: this.state.itemKeyPairs[i].name
        });
      }
      if (this.state.itemKeyPairs[i].id === this.props.item2RawId) {
        this.setState({
          item2: this.state.itemKeyPairs[i].name
        });
      }
      if (this.state.itemKeyPairs[i].id === this.props.item3RawId) {
        this.setState({
          item3: this.state.itemKeyPairs[i].name
        });
      }
      if (this.state.itemKeyPairs[i].id === this.props.item4RawId) {
        this.setState({
          item4: this.state.itemKeyPairs[i].name
        });
      }
      if (this.state.itemKeyPairs[i].id === this.props.item5RawId) {
        this.setState({
          item5: this.state.itemKeyPairs[i].name
        });
      }
      if (this.state.itemKeyPairs[i].id === this.props.item6RawId) {
        this.setState({
          item6: this.state.itemKeyPairs[i].name
        });
      }
    }
    //
    //Swap summoner ID with name
    for (let i = 0; i < this.state.summonerKeyPairs.length; i++) {
      if (this.state.summonerKeyPairs[i].id === this.props.spell1RawId) {
        this.setState({
          spell1: this.state.summonerKeyPairs[i].name
        });
      }
      if (this.state.summonerKeyPairs[i].id === this.props.spell2RawId) {
        this.setState({
          spell2: this.state.summonerKeyPairs[i].name
        });
      }
    }
    //
    //Swap rune ID with name
    for (let i = 0; i < runesJsonData.length; i++) {
      if (runesJsonData[i].id === this.props.perkPrimaryStyleRawId) {
        this.setState({
          perkPrimary: runesJsonData[i].key
        });
      }
      if (runesJsonData[i].id === this.props.perkSubStyleRawId) {
        this.setState({
          perkSub: runesJsonData[i].key
        });
      }
    }
    //
    //Converts game Creation into Date
    let dt = new Date(this.props.gameCreation);
    let gC = moment(dt).format("MMM Do YYYY,h:mm a");
    let gCD = gC.split(",", 1).toString();
    let gCT = gC
      .split(gCD + ",", 2)
      .join("")
      .toString();
    // console.log(gCT);
    //Converts duration into Time
    var minutes = Math.floor(this.props.gameDuration / 60);
    // console.log("Minutes: ", minutes);
    var seconds = this.props.gameDuration - minutes * 60;
    let gD = [minutes + `m ` + seconds + "s"].join(" ");
    //
    //Swaps win/loss Boolean to text
    //Need to figure out what to do for remake? Work on this later
    if (this.props.win) {
      this.setState({
        win: "Victory"
      });
    } else {
      this.setState({
        win: "Defeat"
      });
    }
    //
    //Calculating Creep Score + Creep Score Per Minute
    let creepS =
      (+this.props.totalMinionsKilled + +this.props.neutralMinionsKilled) /
      minutes;
    //Total Creep Score
    let cs = +this.props.totalMinionsKilled + +this.props.neutralMinionsKilled;
    //Creep Score Per Minute
    let csPM = Math.round(creepS * 10) / 10;
    //
    //Calculating KDA score
    if (this.props.deaths === 0) {
      this.setState(
        {
          deaths: "1"
        },
        function onceDeathStateUpdated() {
          this.calculateKDA();
        }
      );
    } else {
      this.setState(
        {
          deaths: this.props.deaths
        },
        function onceDeathStateUpdated() {
          this.calculateKDA();
        }
      );
    }

    //
    //Updating gameMode based on queueId
    //https://developer.riotgames.com/game-constants.html REFERENCE
    //Bot Matches
    if (
      this.props.queueId === 800 ||
      this.props.queueId === 810 ||
      this.props.queueId === 820 ||
      this.props.queueId === 830 ||
      this.props.queueId === 840 ||
      this.props.queueId === 850
    ) {
      this.setState({
        queueId: "Bot Match"
      });
    }

    //ARURF
    if (this.props.queueId === 900 || this.props.queueId === 1010) {
      this.setState({
        queueId: "ARURF"
      });
    }

    //ARAM
    if (this.props.queueId === 450 || this.props.queueId === 100) {
      this.setState({
        queueId: "ARAM"
      });
    }

    //Normal Draft Pick
    if (this.props.queueId === 400) {
      this.setState({
        queueId: "Normal (Draft Pick)"
      });
    }

    //Normal Blind Pick
    if (this.props.queueId === 430) {
      this.setState({
        queueId: "Normal (Draft Pick)"
      });
    }

    //Ranked Solo Pick
    if (this.props.queueId === 420) {
      this.setState({
        queueId: "Ranked Solo"
      });
    }

    //Ranked Flex Pick
    if (this.props.queueId === 440) {
      this.setState({
        queueId: "Ranked Flex"
      });
    }

    //Twisted Treeline Blind
    if (this.props.queueId === 460) {
      this.setState({
        queueId: "Twisted Treeline Blind"
      });
    }

    //Twisted Treeline Ranked
    if (this.props.queueId === 470) {
      this.setState({
        queueId: "Twisted Treeline Blind"
      });
    }

    //Clash
    if (this.props.queueId === 700) {
      this.setState({
        queueId: "Clash"
      });
    }
    //
    //Updates everything calculated above and push it to state
    this.setState({
      gameCreationDate: gCD,
      gameCreationTime: gCT,
      gameDuration: gD,
      creepScore: cs,
      creepScorePerMin: csPM
    });
  }

  calculateKDA = () => {
    let kd = (+this.props.kills + +this.props.assists) / +this.state.deaths;
    let kda = Math.round(kd * 10) / 10;
    this.setState(
      {
        KDA: kda
      },
      function onceKDAStateUpdated() {
        // console.log("kda: ", this.state.KDA);
      }
    );
  };

  render() {
    return (
      <div className="GameItem">
        <GameModuleMatchInfo
          gameCreationDate={this.state.gameCreationDate}
          gameCreationTime={this.state.gameCreationTime}
          gameDuration={this.state.gameDuration}
          outcome={this.state.win}
          queueId={this.state.queueId}
        />
        <GameModuleChampInfo
          champName={this.state.champName}
          champIcon={process.env.PUBLIC_URL + this.props.championId}
          spell1={process.env.PUBLIC_URL + this.props.spell1Id}
          spell1Name={this.state.spell1}
          spell2={process.env.PUBLIC_URL + this.props.spell2Id}
          spell2Name={this.state.spell2}
          role={this.props.role}
        />
        <GameModuleStatsInfo
          kills={this.props.kills}
          deaths={this.state.deaths}
          assists={this.props.assists}
          champLevel={this.props.champLevel}
          goldEarned={this.props.goldEarned}
          goldSpent={this.props.goldEarned}
          perkPrimaryStyle={
            process.env.PUBLIC_URL + this.props.perkPrimaryStyle
          }
          perkPrimaryStyleName={this.state.perkPrimary}
          perkSubStyle={process.env.PUBLIC_URL + this.props.perkSubStyle}
          perkSubStyleName={this.state.perkSub}
          totalMinionsKilled={this.props.totalMinionsKilled}
          creepScorePerMin={this.state.creepScorePerMin}
          creepScore={this.state.creepScore}
          KDA={this.state.KDA}
        />
        <GameModuleItemInfo
          item0={process.env.PUBLIC_URL + this.props.item0}
          item0Name={this.state.item0}
          item1={process.env.PUBLIC_URL + this.props.item1}
          item1Name={this.state.item1}
          item2={process.env.PUBLIC_URL + this.props.item2}
          item2Name={this.state.item2}
          item3={process.env.PUBLIC_URL + this.props.item3}
          item3Name={this.state.item3}
          item4={process.env.PUBLIC_URL + this.props.item4}
          item4Name={this.state.item4}
          item5={process.env.PUBLIC_URL + this.props.item5}
          item5Name={this.state.item5}
          item6={process.env.PUBLIC_URL + this.props.item6}
          item6Name={this.state.item6}
        />
        <GameModuleFullMatchInfo gameId={this.props.gameId} />
      </div>
    );
  }
}

export default GameItem;
