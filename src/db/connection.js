// import mongoose from "mongoose";
// import { DB_NAME } from "../constrains.js";


// const connectDB=async()=>{
//     try{
//         const connectionInstance= await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         console.log(`\n mongoDB connect !! DB HOST:${connectionInstance.connection.host}`)
//     }catch(error){

//         console.log(`MONGODB connection error:${error}`)
//         process.exit(1)
//     }
// }
// export default connectDB;


import mongoose from "mongoose";
import { DB_NAME } from "../constrains.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `\nMongoDB connected! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB connection FAILED : ${error}`);
    process.exit(1); 
  }
};

export default connectDB;
