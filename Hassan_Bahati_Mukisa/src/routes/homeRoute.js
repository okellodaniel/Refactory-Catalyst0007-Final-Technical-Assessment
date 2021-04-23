//Require express
const express = require('express');
const Covid = require('../models/homeModel')

//Create a router 
const router = express.Router();

//Render the form when user hits end point /
router.get('/', (req,res) =>{
    res.render('home');
})

router.post('/', async (req,res) => {
    //Create a promise using try and catch blocks
    try{ const person = new Covid (req.body)
        await person.save();
        res.redirect('/covid/')
    }
    catch(err){
        console.log(err)
        res.send('Error Posting Data')
    }
})

module.exports = router
