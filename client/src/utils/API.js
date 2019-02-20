import axios from "axios";

export default {
  getUser: function(queryUser) {
    console.log("INSIDE API.JS", queryUser.region);
    return axios.get(
      "/api/summoner/" + queryUser.username,
      queryUser
      //+ "/" + queryUser.region
    );
  },
  //GET ROUTE BUT USING POST TO PASS DATA TO MONGOOSE QUERY
  findByUsername: function(queryUser) {
    console.log("findByUsername-> queryUser: ", queryUser);
    return axios.put("/api/userCheck/" + queryUser.username, queryUser);
  },
  createProfile: function(newProfileObj) {
    console.log("newProfileObj: ", newProfileObj);
    return axios.post(
      "/api/matchData/" + newProfileObj.accountId,
      newProfileObj
    );
  },
  getMatchHistory: function(userData) {
    console.log("Inside getMatchHistory: ", userData);
    return axios.get(
      "/api/summoner/" + userData.accountId + "/" + userData.region
    );
  },
  //Spoofed get route as a put route to allow for data to be passed through
  //req.body to backend
  getMatchData: function(userData2) {
    console.log("Inside getMatchData: ", userData2);
    return axios.put(
      "/api/summoner/" + userData2.accountId + "/na/" + userData2.getMatchData,
      userData2
    );
  },
  saveMatchData: function(mData) {
    console.log("Inside saveMatchData: ", mData);
    return axios.put("/api/matchData/" + mData.profile.accountId, mData);
  },
  getRankedData: function(rData) {
    console.log("Inside getRankedData: ", rData);
    return axios.put(
      "/api/rankedData/" + rData.username, rData
    );
  }
  //
  //
  //
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
