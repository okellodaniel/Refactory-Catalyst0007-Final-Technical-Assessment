//dependencies
const express =require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const pug = require('pug')

//importing models
require('./models/covidReg');

//path to file with the variable router
const homeRoute=require("./routes/covidRegRoutes")

//instatiations
const app= express()

//db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  
  mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
    })
    .on('error', (err) => {
      console.log(`Connection error: ${err.message}`);
    });

//configurations

app.set('view engine', 'pug');
app.set('views', './views');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

//routes

app.use('/',homeRoute)


app.get('*',(req,res)=>{
    res.send('Error')
})









//creates a server where browsers can connect
app.listen(4000, () => console.log('listening on port 4000'));