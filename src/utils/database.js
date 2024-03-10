import mongoose from "mongoose";

let isConnected = false; // track connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    // console.log( 'MongoDB is already connected');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DATABASE,
      // useNewUrlParse: true,
      // useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected", process.env.MONGODB_URI);
  } catch (e) {
    console.error(e);
  }
};
