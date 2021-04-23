//Dependencies
const express = require ('express');
const mongoose = require ('mongoose');
require ('dotenv').config();
//Requiring a route
const patientsReg = require('./routes/patientsReg');

// Instatiating express
const app = express();

//Middleware handling data from the form
app.use(express.urlencoded({
    extended:true
})); 

//middleware for serving static files
app.use(express.static('public'));

//Middleware configurations 
app.set('views', 'views');
app.set('view engine', 'pug');

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});