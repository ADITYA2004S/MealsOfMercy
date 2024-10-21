import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();

const connectMongoDB = async () => {
  try {
    await connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DB}`, {
      appName: process.env.MONGODB_APP,
      retryWrites: true,
      retryReads: true,
    });
  } catch (error) {
    console.log(`MongoDB Error: ${error instanceof Error && error.message}`);
    process.exit();
  }
};

export default connectMongoDB;
