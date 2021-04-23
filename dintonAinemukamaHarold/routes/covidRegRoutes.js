const express = require("express");
const router = express.Router();
const registration = require("../models/covidReg");

router.get("/", (req, res) => {
    
      res.render("covidReg", {title: "Covid Registration Form" });
  
  });














module.exports = router;