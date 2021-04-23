import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import{connectDB} from './Akena-fareal/project-test/configs/db.js'

/**configs */
connectDB()
dotenv.config();
/* @ Init app*/
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/**Views Enging */
app.set('views', './views');
app.set('view engine', 'pug');

// 
// Model
const registerSchema = mongoose.Schema(
  {
    fullname: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

// Home routes
app.get('/', (req, res) => {
  res.render('index');
})

// @ Start server
app.listen(4000, console.log(`server started on port 4000...`))