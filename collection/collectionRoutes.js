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
  const deleteCollection = async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCollection(id);
    res.json(status);
  };

  app.post("/api/collections", createCollection);
  app.get("/api/collections", findAllCollections);
  app.get("/api/collections/collaberator/:id", findCollectionByCollaberatorId);
  app.get("/api/collections/ownerName/:username", findCollectionByOwnerUsername);
  app.get("/api/collections/ownerId/:id", findCollectionByOwnerId);
  app.put("/api/collections/:id", updateCollection);
  app.put("/api/collections/items/:id", updateCollectionItems);
  app.delete("/api/collections/:id", deleteCollection);
}
export default CollectionRoutes;
