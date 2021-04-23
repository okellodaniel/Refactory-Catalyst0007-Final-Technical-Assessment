// Dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// Instantiating
const app = express();
// Require the Patient Routes
const patientRoute = require('./routes/patientRoute.JS');

// Setting up the mongoose Connection
mongoose.connect(process.env.DATABASE,{
     useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
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

// middleware for serving static files
app.use(express.static('public'));

// middleware configurations
app.set('views', 'views');
app.set('view engine', 'pug');

// Routes middleware
app.use('/', patientRoute);

//Request time logger
app.use((req,res,next)=>{
    console.log('New request received at' + Date.now());
    next();
});

// Server Port
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});