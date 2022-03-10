const express = require("express");
const cors = require("cors");
const TemplateInfo = require("./src/models/TemplateDB");
const UserInfo = require("./src/models/UsersDB");
// const ResumeInfo = require("./src/models/ResumeDB");
const loginRouter = require("./src/routes/LoginRoute");
const signupRouter = require("./src/routes/SignupRoute");
const emailvalidator = require("email-validator");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/login", loginRouter);
app.use("/signup", signupRouter);

app.get("/userslist", function (req, res) {
  UserInfo.find().then(function (users) {
    console.log("users::", users);
    res.json(users);
  });
});

app.post("/deleteuser", function (req, res) {
  const email = req.body.email;

  if (emailvalidator.validate(req.body.email)) {
    UserInfo.findOneAndDelete({ name: email }).then(function (users) {
      res.json(users);
    });
  } else {
    res.status(400).send("Invalid Email");
  }
});

// app.post("/contactinfo", function (req, res) {
//   var resume = {
//     phone: req.body.phone,
//     email: req.body.email,
//     website: req.body.website,
//     address: req.body.address,
//     experience: req.body.experience,
//   };
//   console.log(resume);
//   const resumeDetails = new ResumeInfo(resume);
//   resumeDetails.save(function (err, result) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//       res.json(result);
//     }
//   });
// });

// Port number
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
