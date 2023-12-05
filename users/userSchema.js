import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    firstName: String,
    lastName: String,
    role: {
      type: String,
      enum: ["ARTIST", "CLIENT"],
      default: "CLIENT" },
  },
  { collection: "users" });
export default userSchema;