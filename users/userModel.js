import mongoose from "mongoose";
import schema from "./userSchema.js";
const model = mongoose.model("users", schema);
export default model;