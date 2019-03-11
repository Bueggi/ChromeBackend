var mongoose = require("mongoose");
const YouTuber = require("./youtuber");
var Schema = mongoose.Schema;

var productSchema = new Schema({
  id: [String],
  title: String,
  YouTuber: String,
  added: { type: Date, default: Date.now },
  meta: {
    displayed: Number,
    favs: Number
  }
});
