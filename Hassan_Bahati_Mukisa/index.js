//imports
const express = require ('express');
const mongoose = require ('mongoose');
const Route = require('./routes/covid');
require ('dotenv').config();
// instantiating express
const app = express()

//middleware
app.use(express.urlencoded({
    extended:true
})); 
//middleware for static files //images,css,js
app.use(express.static('public'));
//setting pug as templeting engine
app.set('views', 'views');
app.set('view engine', 'pug');


//database connection
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});  

mongoose.connection
.on('open', () => {
  console.log('Mongoose connection open');
})
.on('error', (err) => {
  console.log(`Connection error: ${err.message}`);
});

//routing
app.use('/hassan', Route);


//port 
app.listen(5000, () => {
    console.log("listening on port 5000");
})
