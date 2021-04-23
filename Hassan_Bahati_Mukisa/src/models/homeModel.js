//Dependencies
const mongoose = require('mongoose');

var covid_formSchema = new mongoose.Schema({
    surname:String,
    first_name:String,
    dob:Date,
    residence:String,
    occupation:String,
    nationality:String,
    gender:String,
    category:String

})

module.exports = mongoose.model('Registered', covid_formSchema)

