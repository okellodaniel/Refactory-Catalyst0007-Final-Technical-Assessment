//Require express
const express = require('express');
const Covid = require('../models/covid')

//instantiating express
const router = express.Router();

//get form
router.get('/', (req,res) =>{
    res.render('covid');
})

//posting data
router.post('/', async (req,res) => {
    try{ const patient = new Covid (req.body)
        await patient.save();
        res.redirect('/hassan')
    }
    catch(err){
        console.log(err)
        res.send('Error While Posting Data')
    }
})

module.exports = router
