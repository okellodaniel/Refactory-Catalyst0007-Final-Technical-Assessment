//Dependencies
const express = require ('express');
const mongoose = require ('mongoose');
const Route = require('./routes/covid');
require ('dotenv').config();

// instating express
const app = express()

//Middleware
app.use(express.urlencoded({
    extended:true
})); 
app.use(express.static('public'));


//Middleware configurations 
app.set('views', 'views');
app.set('view engine', 'pug');


//routes
app.use('/hassan', Route);

//Db connection
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });  

//db
  mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });


app.listen(5000, () => {
    console.log("listening on port 5000");
})
