import mongoose from "mongoose";


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`Connection eshatblished successfully : ${conn.connection.host}`);

    }
    catch (error) {
        console.error("DB connection error", error);
        process.exit(1);
    }
   
}

export default connectDB;