import axios from "axios";

export default {
  getUser: function() {
    console.log("INSIDE API.JS")
    return axios.get("/api/profile");
  },
  getMatchHistory: function(userData) {
    // const name = userData.profile.name
    console.log("Inside getMatchHistory: ", userData.accountId)
    return axios.get("/api/profile/" + userData.accountId);
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
