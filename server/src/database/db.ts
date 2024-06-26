import mongoose from 'mongoose'
const connectDb = async (uri:string) => { 
  try {
      const db = await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
    })
    console.log(`Connecting to ${db.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}
export default connectDb
