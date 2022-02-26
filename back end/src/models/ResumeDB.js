const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://gaya3:gaya397@cluster0.bjgsw.mongodb.net/ResumeBuilderDatabase?retryWrites=true&w=majority"
);

const Schema = mongoose.Schema;

var resumeSchema = new Schema({
  name: String,
  education: String,
  qualification: String,
  skill: String,
  experience: String,
});

var ResumeInfo = mongoose.model("Resumes", resumeSchema);

module.exports = ResumeInfo;
