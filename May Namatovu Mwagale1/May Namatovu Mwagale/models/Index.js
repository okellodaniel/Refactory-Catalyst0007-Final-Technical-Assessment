//require mongoose
const mongoose = require('mongoose');

//schema for data
const contactSchema = new mongoose.Schema({
    surname: {
        type: String,
        // required: 'Please Enter your fullname'
    },
    first_name: {
        type: String,
        // unique: true,
        // required: 'Please Enter your email'
    },
    dob: {
       type: String,
    //    required: 'Please Enter your number'
    },
    residence: {
        type: String,
        // required: 'Optional'
    },
    occupation: {
        type: String,
        // required: 'Optional'
    },
    nationality: {
        type: String,
        // required: 'Optional'
    },
    occupation: {
        type: String,
        // required: 'Optional'
    },
    female: {
        type: String,
        // required: 'Optional'
    },
    male: {
        type: String,
        // required: 'Optional'
    },
    category: {
        type: String,
        // required: 'Optional'
    },
})

//exporting mongoose model
module.exports = mongoose.model('Index', indexSchema);