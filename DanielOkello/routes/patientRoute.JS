const express = require('express');
const router = express.Router();

// Import the Patient Model

const Patient = require('../models/Patient');

// Render the page when user hits endpoint '/'

router.get('/', (req,res)=>{
    res.render('patientForm', {title:'Covid19 Patient Registration form'}).status(200);
});

// Receive data from user on end point '/'

router.post('/', async(req,res)=>{
    try{
        const covidPatient = new Patient(req.body);
        await covidPatient.save();
        res.redirect('/');
    }
    catch(err){
        console.log(err);
        res.send('Error!, Something went wrong').status(400);
    }
});

// Export the model
module.exports = router;