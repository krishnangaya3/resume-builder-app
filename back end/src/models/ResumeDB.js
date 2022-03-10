const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://gaya3:gaya397@cluster0.bjgsw.mongodb.net/ResumeBuilderDatabase?retryWrites=true&w=majority"
);

const Schema = mongoose.Schema;

var contactSchema = new Schema({
  phone: Number,
  email: String,
  website: String,
  address: String,
  experience: String,
});

// // var skillInterestSchema = new Schema({
// //   interest1: String,
// //   interest2: String,
// //   interest3: String,
// //   interest4: String,
// //   interest5: String,
// //   skill1: String,
// //   skill2: String,
// //   skill3: String,
// //   skill4: String,
// //   skill5: String,
// //   skill6: String,
// //   skill7: String,
// // });

// // var eduExpSchema = new Schema({
// //   school1: String,
// //   degree1: String,
// //   edyear1: String,
// //   school2: String,
// //   degree2: String,
// //   edyear2: String,
// //   school3: String,
// //   degree3: String,
// //   edyear3: String,
// //   company1: String,
// //   job1: String,
// //   exyear1: String,
// //   company2: String,
// //   job2: String,
// //   exyear2: String,
// // });

// // // var resumeSchema = new Schema({
// // //   name: String,
// // //   education: String,
// // //   qualification: String,
// // //   skill: String,
// // //   experience: String,
// // // });

// var resumeDetails = [contactSchema, skillInterestSchema, eduExpSchema];

var ResumeInfo = mongoose.model("Resumes", resumeDetails);

module.exports = ResumeInfo;
