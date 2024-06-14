import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URL=process.env.MONGODB_URL;
const connectDB = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/Blog_Web", {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })
        .then(() => console.log('\n MongoDB connected !!'))
        .catch( (error) => {
            console.log("DB connection Issue");
            console.error(error);
            process.exit(1);
        })
}

export default connectDB;