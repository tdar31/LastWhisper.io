import axios from "axios";

export default {
  getUser: function(queryUser) {
    console.log("INSIDE API.JS", queryUser.region);
    return axios.get(
      "/api/summoner/" + queryUser.username + "/" + queryUser.region,
      queryUser
    );
  },
  getMatchHistory: function(userData) {
    console.log("Inside getMatchHistory: ", userData);
    return axios.get(
      "/api/summoner/" + userData.accountId + "/" + userData.region + "/1"
    );
  }
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
