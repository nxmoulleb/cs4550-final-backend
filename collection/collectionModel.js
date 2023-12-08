import mongoose from "mongoose";
import schema from "./collectionSchema.js";
const model = mongoose.model("collection", schema);
export default model;