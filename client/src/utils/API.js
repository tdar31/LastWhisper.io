import axios from "axios";

export default {
  getUser: function(queryUser) {
    console.log("INSIDE API.JS", queryUser)
    return axios.get("/api/summoner/"+queryUser, queryUser);
  },
  getMatchHistory: function(userData) {
    // const name = userData.profile.name
    console.log("Inside getMatchHistory: ", userData.accountId)
    return axios.get("/api/summoner/" + userData.accountId+"/1");
  },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
