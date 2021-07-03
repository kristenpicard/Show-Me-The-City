const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Thinking we may need a favorites schema?

const RecsSchema = new Schema({
  // Guessing image is string because URL is a string?
  image: String,
  location: String,
  title: String,
  synopsis: String,
  date: Date,
  category: String,
  list: Array,
  favorited: Number,
  userID: String
});

const Recs = mongoose.model("Recs", RecsSchema);

module.exports = Recs;
