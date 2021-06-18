const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Thinking we may need a favorites schema?

const RecsSchema = new Schema({
  // Guessing image is string because URL is a string?
  image: String,
  city: String,
  headline: String,
  intro: String,
  // Mongoose examples showed this is how to denote an array but unsure?
  list: [],
  favorited: Number,
});

const Recs = mongoose.model("Recs", RecsSchema);

module.exports = Recs;
