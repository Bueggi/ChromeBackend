const mongoose = require("mongoose");

exports.launch = () => {
  mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
  var db = mongoose.connection;
  db.on("error", () => console.log("erro"));
  db.once("open", function() {
    console.log("open database");
  });
};
