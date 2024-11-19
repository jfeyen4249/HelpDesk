const express = require("express");
const middleware = require('../../tools/middleware.js')
const fn = require('../../tools/publicFunctions.js');
const router = express.Router();


router.get("/", (req, res) => {
    res.render("./agent/login");
  });

router.get("/tickets", (req, res) => {
    res.render("./agent/tickets");
  });

router.get("/cal", (req, res) => {
    res.render("./agent/cal");
  });

router.get("/off", (req, res) => {
    res.render("./agent/off");
  });

router.get("/time", (req, res) => {
    res.render("./agent/time");
  });

  router.get("/dashboard", (req, res) => {
    res.render("./agent/dashboard");
  });

  router.get("/closed", (req, res) => {
    res.render("./agent/closed");
  });

  router.get("/ticket", (req, res) => {
    // let id = req.params.id;
    // console.log(id);
    res.render("./agent/ticket");
  });



  module.exports = router;