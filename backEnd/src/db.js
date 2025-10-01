import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/UserInfo')
    console.log('✅ Database Connected')
  } catch (error) {
    console.error(' MongoDB connection failed:', error.message)
  }
};

export default connectDB
