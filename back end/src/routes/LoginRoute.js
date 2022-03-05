const express = require("express");
const loginRouter = express.Router();
const UserInfo = require("../models/UsersDB");

loginRouter.get("/", function (req, res) {
  res.render("login", {});
});

loginRouter.post("/verifyuser", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  console.log("verifyuser req body::", req.body);
  let username = req.body.username;
  let password = req.body.password;

  UserInfo.findOne(
    { username: username, password: password },
    function (err, user) {
      console.log(user);
      res.json(user);
    }
  );
});

module.exports = loginRouter;
