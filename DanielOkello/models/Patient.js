const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    surName:{
        type:String
    },

    givenName:{
        type:String
    },

    dOB:{
        type:Date
    },

    residence:{
        type:Sting
    },

    occupation:{
        type:String
    },

    nationality:{
        type:String
    },

    gender:{
        type:String
    },

    category:{
        type:String
    }

});

// Associating the patient schema to the actual collection Name

module.exports = mongoose.model('Patient', patientSchema);