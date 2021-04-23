// Dependencies
const express = require('express');
const mongoose = reuire('mongoose');
require('dotenv').config();
// Instantiating
const app = express();

// Require the Patient Routes
const patientRoute = require('./routes/patientRegRoute');

// Setting up the mongoose Connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true ,
    useUnifiedTopology : true
});

// Mongoose Config
mongoose.connection
.on('open',() => {
console.log('Mongoose connection open');
})
.on('error',(err) => {
console.log(`Connection error:${err.message}`);
});

// middle ware
app.use(express.urlencoded({extended:true}));

// middleware configurations
app.set('views', 'views');
app.set('view engine', 'pug');

// Routes middleware
app.use('/patient', patientRoute);


// Server Port
const port = process.env.PORT || 3000;
app.use(port, ()=>{
    console.log(`listening on port ${port}`);
});