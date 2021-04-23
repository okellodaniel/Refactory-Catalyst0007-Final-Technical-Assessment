//Dependencies
const mongoose = require('mongoose');

var patientsSchema = new mongoose.Schema({
    surname:String,
    givenname:String,
    DoB:Date,
    residence:String,
    occupation:String,
    nationality:String,
    gender:String,
    category:String

})

module.exports = mongoose.model('Patients', patientsSchema)