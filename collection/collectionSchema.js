import mongoose from "mongoose";
const collectionSchema = new mongoose.Schema({
    ownerUsername: { type: String, required: true, unique: true },
    ownerId: { type: String, required: true, unique: true },
    itemData: [{objectId: String, objectName: String, artistName: String}],
    collaberators: [mongoose.Types.ObjectId],
  },
  { collection: "collection" });
export default collectionSchema;