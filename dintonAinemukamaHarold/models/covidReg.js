const mongoose = require("mongoose");

//create a schema for the data you need to save

const covidRegSchema = new mongoose.Schema({
  surname: {
    type: String,
  },
  givenName: {
    type: String,
  },
  dob: {
    type: String,
  },
  residence: {
    type: String,
  },
  occupation: {
    type: String,
  },
  nationality: {
    type: String,
  },
  gender: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.model("covidRegistration", covidRegSchema);