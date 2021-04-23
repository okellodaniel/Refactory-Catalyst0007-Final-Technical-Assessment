//Dependecies
const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const index = require('./routes/index');
require('./models/Index');

//Instantiating express
const app = express();

//db connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection
   .on('open', () =>{
     console.log('Mongoose connection open');
   })
   .on('error', (err) =>{
     console.log('Connection erroe: ${err.message}');
   })

//Cpnfigurations
app.set("view engine", "pug");
app.set("views", "./views");

//Middleware
app.use(express.urlencoded({ extended: true }));

//Middleware static files
app.use(express.static("system-images"));
app.use('/system-images', express.static(__dirname + '/system-images'));


//custom middleware
app.use((req, res, next) => {
  console.log("A new request received at " + Date.now());
  next();
});

app.use("/index", index);

//cater for undefined routes
app.get('*', (req, res) => {
    res.send('The route specified doesnt exist')
})

//Server
app.listen(4000, () => {
  console.log("Listening on port 4000");
});