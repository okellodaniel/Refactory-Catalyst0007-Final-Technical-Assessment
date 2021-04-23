const express = require('express');
const router = express.Router();
const Patients = require('../models/Patients');

router.get('/', (req,res) => {
    res.render('patientsReg',{title:'Patients Registration Form'})
});

router.post('/', async (req,res) => {
    //Create a promise using try and catch blocks
    try{ const person = new Patient (req.body)
        await person.save();
        res.redirect('/patientsReg/')
    }
    catch(err){
        console.log(err)
        res.send('Please try again')
    }
})

module.exports = router;