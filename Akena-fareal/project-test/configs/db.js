import mongoose from 'mongoose';

export const connectDB = () => {
  return mongoose.connect(
    'mongodb://localhost/stayclean-initiative',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) console.error(err.message);
      console.log('Connection to database successful.');
    }
  );
};

