import React from "react";
// import "./style.css";

function GameItem({ children, championId, spell1Id, spell2Id, assists, champLevel, deaths, goldEarned, goldSpent, item0, item1, item2, item3, item4, item5, item6, kills, win, role}) {
  return (
    <div>
      <div className="GameItem has-background-dark">championId{championId}</div>
      <div>spell1Id{spell1Id}</div>
      <div>spell2Id{spell2Id}</div>
      <div>assists{assists}</div>
      <div>champLevel{champLevel}</div>
      <div>deaths{deaths}</div>
      <div>goldEarned{goldEarned}</div>
      <div>goldSpent{goldSpent}</div>
      <div>item0/{item0}</div>
      <div>item1/{item1}</div>
      <div>item2/{item2}</div>
      <div>item3/{item3}</div>
      <div>item4/{item4}</div>
      <div>item5/{item5}</div>
      <div>item6/{item6}</div>
      <div>kills{kills}</div>
      <div>win{win}</div>
      <div>role{role}</div>
    </div>
  );
}

export default GameItem;
