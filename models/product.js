var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
  videoIDs: [Number],
  name: String,
  ASIN: String,
  added: { type: Date, default: Date.now },
  meta: {
    displayed: Number,
    favs: Number
  }
});

var Product = mongoose.model("Product", productSchema);

module.exports = Product;
