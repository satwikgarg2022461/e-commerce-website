import colors from "colors";
import mongoose from "mongoose";
// import { colors } from 'con';

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_DB);
        console.log(`Connected to MongoDB Database ${conn.connection.host}`.bgMagenta.white);

    }catch(error){
        console.log(`Error in MongoDB ${error}`.bgRed.white);
    }
}

export default connectDB;