import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  createPost: function(postData) {
    return axios.post("/api/posts", postData);
  },
  // Updates the post with the given id
  updatePost: function(id) {
    return axios.put("/api/posts/" + id);
  },
};
