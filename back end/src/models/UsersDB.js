const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://gaya3:gaya397@cluster0.bjgsw.mongodb.net/ResumeBuilderDatabase?retryWrites=true&w=majority"
);

const Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

var UserInfo = mongoose.model("Users", userSchema);

module.exports = UserInfo;
