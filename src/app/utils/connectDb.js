import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    console.log(process.env.DATABASE_URI);
    return await mongoose.connect(process.env.DATABASE_URI);
  } catch (error) {
    console.error(error.message);
  }
};
