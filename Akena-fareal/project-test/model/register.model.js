import mongoose from 'mongoose';

const registerSchema = mongoose.Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Register', registerSchema);
