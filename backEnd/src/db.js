import mongoose from 'mongoose'
const MongoUri='mongodb://localhost:27017'
const connectDB = async () => {
  try {
    await mongoose.connect(`${MongoUri}/UserInfo`)
    console.log(' Database Connected')
  } catch (error) {
    console.error(' MongoDB connection failed:', error.message)
  }
};

export default connectDB

