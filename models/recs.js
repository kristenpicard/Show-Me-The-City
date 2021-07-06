const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecsSchema = new Schema({
  image: String,
  location: String,
  title: String,
  synopsis: String,
  date: Date,
  category: String,
  favoritesList: Array,
  favorited: Number,
  userID: String
});

const Recs = mongoose.model("Recs", RecsSchema);

module.exports = Recs;
