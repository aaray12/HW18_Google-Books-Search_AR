
import axios from "axios";

export default {
  getBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  saveBook: function (book){
      return axios.post("/api/books/", book).then(res => res.data)
  }
}