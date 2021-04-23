//Dependencies
const express = require('express');
const mongoose = require('mongoose');
//Require the routes set
const formRoute = require('./routes/formRoute');


require('dotenv').config();


//Instanciations 
const app = express();


//Db connection.
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//Connection to database using mongoose
mongoose.connection.
on('open', () => {
console.log('Mongoose connection open');
})
.on('error', (err) => {
console.log(`Connection error: ${err.message}`);
});

//Middlewares
app.use(express.urlencoded({
    extended: true
}));

//Serving static files
app.use(express.static('public'));

//Middleware Configurations
app.set('views', 'views');
app.set('view engine', 'pug');

//Route
app.use('/', formRoute);



app.listen(3000, () => {
    console.log('Listening on port 3000');
});
