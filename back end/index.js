const express = require("express");
const cors = require("cors");
const TemplateInfo = require("./src/models/TemplateDB");
const UserInfo = require("./src/models/UsersDB");
const ResumeInfo = require("./src/models/ResumeDB");
const loginRouter = require("./src/routes/LoginRoute");
const signupRouter = require("./src/routes/SignupRoute");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/login", loginRouter);
app.use("/signup", signupRouter);

app.post("/resumeinfo", function (req, res) {
  var resume = {
    name: req.body.name,
    education: req.body.education,
    qualification: req.body.qualification,
    skill: req.body.skill,
    experience: req.body.experience,
  };
  console.log(resume);
  const resumeinfo = new resumeDetails(resume);
  resumeDetails.save(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

// Port number
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
