import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    collectionId: { type: String, required: true },
    authorName: { type: String, required: true },
    authorId: { type: String, required: true },
    contents: { type: String, required: true },
  },
  { collection: "reviews" });
export default reviewSchema;