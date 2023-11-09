// import mongoose from "mongoose";

// export const connectToDb = async () => {
//   // const connection = mongoose.connection;
//   const connection = {};

//   try {
//     if (connection.isConnected) return;
//     const db = await mongoose.connect("mongodb+srv://kado:kado@cluster0.qvy5gzn.mongodb.net/?retryWrites=true&w=majority");
//     connection.isConnected = db.connections[0].readyState;
//     console.log("Connected to DB");
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// };

import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "dashboard",
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}
