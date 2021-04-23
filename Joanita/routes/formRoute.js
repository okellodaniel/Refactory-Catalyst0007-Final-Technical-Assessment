//Require dependencies 
const express = require('express');
const form = require('../models/form')

//Create the router 
const router = express.Router();

router.get('/', (req, res) => {
    res.render ('form');
})

router.post('/', async (req, res) => {
    try { const user = new form (req.body)
    await user.save();
    res.redirect('/form/')
}
catch (err) {
    console.log(err)
    res.send('Error submitting data')
}
})

module.exports = router