//Require Express
const express = require('express');
//Activate method router rom express
const router = express.Router();
const CovidRegister = require('../models/CovidRegister');

//Redering the form when route is hit
router.get('/', (req, res) => {
    res.render('covidForm');
});

router.post('/', async(req,res) => {
    try{
        const tested = new CovidRegister(req.body)
        await tested.save()
        res.redirect('/')
    }
    catch(err){
        console.log(err);
        res.send('Sorry! Something went wrong.');
    }
});
                                 
module.exports = router;