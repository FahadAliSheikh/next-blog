import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to db");
  } catch (error) {
    console.log("error in db connection");

    throw new Error("connection failed");
  }
};

export default connect;
