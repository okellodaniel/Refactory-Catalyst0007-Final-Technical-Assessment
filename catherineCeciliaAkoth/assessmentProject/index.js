const express = require("express") //Importing Express.
const mongoose = require('mongoose')
require('dotenv').config();


const formRoutes = require("./routes/formRoute")

const app = express();

// Connecting to my database(Form).
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:false


});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
   });

  
// configurations
app.set('view engine', 'pug');
app.set('views', './views');


// Middleware for serving static files.
app.use(express.static('public'));
app.use('/public/images', express.static(__dirname + '/public/images'));

app.use(express.urlencoded({extended: true}))


app.use('/', formRoutes);



app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});
   
// server
app.listen(3050, () => console.log('listening on port 3050'));


