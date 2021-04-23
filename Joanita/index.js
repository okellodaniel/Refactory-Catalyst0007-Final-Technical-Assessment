//Dependencies
const express = require('express')
const mongoose = require('mongoose')

require ('dotenv').config();

//Instantiate 
const app = express()

//Middleware for handling form data
app.use (express.urlencoded ({
    extended:true
}));

//Middleware for access to static folder 
app.use (express.static('public'));

//Access to view folder
app.set('views', 'views');
app.set ('view engine', 'pug');

//Require the route 
const formRoute = require('./routes/formRoute');
//Handling the Route
app.use('/form', formRoute);

//Database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

//Post connection to the database
mongoose.connection
.on('open', () => {
  console.log('Mongoose connection open');
})
.on('error', (err) => {
  console.log(`Connection error: ${err.message}`);
});

//Middleware 

//Listening in on the server
app.listen (3000, () => {
 console.log('Listening on port 3000');
})


