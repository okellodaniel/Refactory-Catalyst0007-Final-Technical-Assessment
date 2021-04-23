const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

//initialising express
const app = express();

 
app.listen(5000, ()=>{
    console.log('Listening on port 5000')
})