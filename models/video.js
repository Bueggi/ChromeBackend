var mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var videoSchema = new Schema({
  id: String,
  title: String,
  YouTuber: String,
  added: { type: Date, default: Date.now },
  meta: {
    displayed: { type: Number, default: 0 },
    favs: { type: Number, default: 0 }
  }
});

var Video = mongoose.model("Video", videoSchema);

module.exports = Video;
