import mongoose from 'mongoose'
// process.env.MONGO_URI
const connectDB = async (res, req, next) => {
    try {
        const conn = await mongoose.connect("mongodb+srv://admin:Ch01082004@cluster0.a83ty8q.mongodb.net/WhatsApp")
        console.log(`MongoDB Connected: ${conn.connection.host}`)
        next()
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}
export default connectDB;