import mongoose from "mongoose";
import schema from "./reviewSchema.js";
const model = mongoose.model("reviews", schema);
export default model;