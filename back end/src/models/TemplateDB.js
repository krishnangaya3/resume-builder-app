const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://gaya3:gaya397@cluster0.bjgsw.mongodb.net/ResumeBuilderDatabase?retryWrites=true&w=majority"
);

const Schema = mongoose.Schema;

var templateSchema = new Schema({
  name: String,
});

var TemplateInfo = mongoose.model("Templates", templateSchema);

module.exports = TemplateInfo;
