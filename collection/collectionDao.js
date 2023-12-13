import model from "./collectionModel.js";
export const createCollection = (collection) => {
  return model.create(collection);
};
export const findAllCollections = () => {
  return model.find();
};
export const findRecentCollections = () => {
  return model.find().sort({lastUpdated: -1});
}
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
export const findReviewerCollections = (id) => {
  return model.find({collaberators: {$elemMatch: {userId: String(id)}}});
}
export const findObjectInCollections = (id) => {
  return model.find({itemData: {$elemMatch: {objectId: String(id)}}});
}
export const updateCollection = (collectionId, collection) => {
  return model.updateOne(
    { _id: collectionId },
    { $set: { ...collection, lastUpdated: Date.now() } }
  );
};
export const updateCollectionItems = (userId, item) => {
  return model.updateOne(
    { ownerId: userId },
    { $push: { itemData: [item] }, $set: { lastUpdated: Date.now() } }
  );
};
export const deleteCollection = (collectionId) => {
  return model.deleteOne({ _id: collectionId });
};
export const deleteItemInCollection = (userId, objectId) => {
  return model.updateOne(
    { ownerId: userId },
    {
      $pull: {
        itemData: { objectId: objectId },
      },
      $set: { lastUpdated: Date.now() },
    }
  );
};
export const updateCollectionCollaberators = (ownerId, userData) => {
  return model.updateOne(
    { ownerId: ownerId },
    { $push: { collaberators: [userData] }, $set: { lastUpdated: Date.now() } }
  );
};
