import model from "./collectionModel.js";
export const createCollection = (collection) => {
  return model.create(collection);
};
export const findAllCollections = () => {
  return model.find();
};
export const findCollectionById = (collectionId) => {
  return model.findById(collectionId);
};
export const findCollectionByOwnerUsername = (ownerUsername) => {
  return model.findOne({ ownerUsername: ownerUsername });
};
export const findCollectionByOwnerId = (id) => {
  return model.findOne({ ownerId: id });
};
export const findCollectionByCollaberatorId = (collaberatorId) => {
  return model.find({ collaberators: collaberatorId });
};
export const updateCollection = (collectionId, collection) => {
  return model.updateOne({ _id: collectionId }, { $set: collection });
};
export const updateCollectionItems = (userId, item) => {
  console.log("itemData", item);
  return model.updateOne({ ownerId: userId }, { $push: { itemData: [item] } });
};
export const deleteCollection = (collectionId) => {
  return model.deleteOne({ _id: collectionId })
};
