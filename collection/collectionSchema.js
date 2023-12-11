import mongoose from "mongoose";
const collectionSchema = new mongoose.Schema({
    ownerUsername: { type: String, required: true, unique: true },
    ownerId: { type: String, required: true, unique: true },
    itemData: [{objectId: String, objectName: String, artistName: String}],
    collaberators: [{userId: String, userName: String}],
  },
  { collection: "collection" });
export default collectionSchema;