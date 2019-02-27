import React, { Component } from "react";
import "./style.css";
import MatchPlayerPanel from "../MatchPlayerPanel";

class MatchPlayerInfo extends Component {
  state = {
    isData: false,
    partLength: "",
    participantIdentities: [],
    participants: [],
    teams: []
  };
  //this.props.matchdata
  componentDidUpdate() {
    if (this.state.isData === false) {
      this.setState(
        {
          isData: true,
          partLength: "",
          participantIdentities: this.props.participantIdentities,
          participants: this.props.participants,
          teams: this.props.teams
        },
        function MatchPlayerInfo() {
          console.log("MatchPlayerInfo: ", this.state);
          //FOR LOOP UPDATING ID TO USERNAME FROM PARTI/IDENTITIES
        }
      );
    }
  }

  render() {
    return (
      <div className="MatchPlayerInfo">
        {this.state.participants.map((partData, index) => (
          <MatchPlayerPanel
            key={index}
            championId={[`/images/tiles/${partData.championId}.jpg`].join(
              " "
            )}
            playerLevel={partData.stats.champLevel}
            spell1Id={[
              `/images/summonerspell/${partData.spell1Id}.png`
            ].join(" ")}
            spell2Id={[
              `/images/summonerspell/${partData.spell2Id}.png`
            ].join(" ")}
            perkPrimaryStyle={[
              `/images/perk-images/Styles/${
                partData.stats.perkPrimaryStyle
              }.png`
            ].join(" ")}
            perkSubStyle={[
              `/images/perk-images/Styles/${
                partData.stats.perkSubStyle
              }.png`
            ].join(" ")}
            item0={[`/images/item/${partData.stats.item0}.png`].join(
              " "
            )}
            item1={[`/images/item/${partData.stats.item1}.png`].join(
              " "
            )}
            item2={[`/images/item/${partData.stats.item2}.png`].join(
              " "
            )}
            item3={[`/images/item/${partData.stats.item3}.png`].join(
              " "
            )}
            item4={[`/images/item/${partData.stats.item4}.png`].join(
              " "
            )}
            item5={[`/images/item/${partData.stats.item5}.png`].join(
              " "
            )}
            item6={[`/images/item/${partData.stats.item6}.png`].join(
              " "
            )}
          />
        ))}
      </div>
    );
  }
}

export default MatchPlayerInfo;
