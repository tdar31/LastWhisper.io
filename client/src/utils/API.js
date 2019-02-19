import axios from "axios";

export default {
  getUser: function(queryUser) {
    console.log("INSIDE API.JS", queryUser.region);
    return axios.get(
      "/api/summoner/" + queryUser.username ,
      queryUser
      //+ "/" + queryUser.region
    );
  },
  getMatchHistory: function(userData) {
    console.log("Inside getMatchHistory: ", userData);
    return axios.get(
      "/api/summoner/" + userData.accountId + "/" + userData.region
    );
  },
  getMatchData: function(userData2) {
    console.log("Inside getMatchData: ", userData2);
    return axios.put(
      "/api/summoner/" + userData2.accountId + "/na/" + userData2.getMatchData, userData2
    );
  },
  // getSummonerRankedData: function(encryptData) {
  //   console.log("Inside getSummonerRankedData: ", encryptData);
  //   return axios.put(
  //     "/api/summoner/" + encryptData.Id + "/na/" + encryptData.dummyData, encryptData
  //   );
  // }
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
