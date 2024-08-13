import mongoose from "mongoose";

type connectionObject = {
  isConnected?: Number;
};

let connection: connectionObject = {};

const MONGODB_URI = process.env.MONGODB_URI;

export const dbConnect = async () => {
  if (connection?.isConnected) {
    console.log("Database is already connected");
    return;
  }

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env file"
    );
  }

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

    connection.isConnected = db.connections[0].readyState;

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(`MONGODB connection error , ${error}`);
    process.exit(1);
  }
};
