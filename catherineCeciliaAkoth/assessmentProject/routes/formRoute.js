// Iniialisation and Imporatation.
const express = require('express');
const router = express.Router();
const Form= require('../models/Form');


router.get('/', (req, res) => {
     
  res.render('form');

});

  
  router.post('/', async(req, res) => { 
    
    try{
    console.log(req.body)
    const form = new Form (req.body);
    
    await form.save()
    res.redirect('/')
    }catch(err){
      console.log(err);
      res.send('oops something went wrong')
   
    }

    })


  
  module.exports = router;