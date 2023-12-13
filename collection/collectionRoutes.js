import * as dao from "./collectionDao.js";
function CollectionRoutes(app) {
  const createCollection = async (req, res) => {
    const collection = await dao.createCollection(req.body);
    res.json(collection)
  };
  const findAllCollections = async (req, res) => {
    const status = await dao.findAllCollections();
    res.json(status);
  };
  const findRecentCollections = async (req, res) => {
    const status = await dao.findRecentCollections();
    res.json(status);
  }
  const findCollectionByCollaberatorId = async (req, res) => {
    const { id } = req.params;
    const status = await dao.findCollectionByCollaberatorId(id);
    res.json(status);
  };
  const findCollectionByOwnerUsername = async (req, res) => {
    const { username } = req.params;
    const status = await dao.findCollectionByOwnerUsername(username);
    res.json(status);
  };
  const findCollectionByOwnerId = async (req, res) => {
    const { id } = req.params;
    const status = await dao.findCollectionByOwnerId(id);
    res.json(status);
  };
  const findReviewerCollections = async (req, res) => {
    const { id } = req.params;
    const status = await dao.findReviewerCollections(id);
    res.json(status);
  }
  const findObjectInCollections = async (req, res) => {
    const { id } = req.params;
    const status = await dao.findObjectInCollections(id);
    res.json(status);
  }
  const updateCollection = async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateCollection(id, req.body);
    res.json(status);
  };
  const updateCollectionItems = async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateCollectionItems(id, req.body);
    res.json(status);
  }
  const updateCollectionCollaberators = async (req, res) => {
    const { id } = req.params;
    const { userData } = req.body;
    const status = await dao.updateCollectionCollaberators(id, req.body.userData);
    res.json(status);
  }
  const deleteCollection = async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCollection(id);
    res.json(status);
  };
  const deleteItemInCollection = async (req, res) => {
    const { id } = req.params;
    const { itemId } = req.params;
    const status = await dao.deleteItemInCollection(id, itemId);
    res.json(status);
  };

  app.post("/api/collections", createCollection);
  app.get("/api/collections", findAllCollections);
  app.get("/api/collections/recent", findRecentCollections);
  app.get("/api/collections/collaberator/:id", findCollectionByCollaberatorId);
  app.get("/api/collections/ownerName/:username", findCollectionByOwnerUsername);
  app.get("/api/collections/ownerId/:id", findCollectionByOwnerId);
  app.get("/api/collections/reviewer/:id", findReviewerCollections);
  app.get("/api/collections/object/:id", findObjectInCollections);
  app.put("/api/collections/:id", updateCollection);
  app.put("/api/collections/items/:id", updateCollectionItems);
  app.put("/api/collections/collab/:id", updateCollectionCollaberators);
  app.delete("/api/collections/:id", deleteCollection);
  app.delete("/api/collections/items/:id/:itemId", deleteItemInCollection);
}
export default CollectionRoutes;
