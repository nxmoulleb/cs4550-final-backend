import * as dao from "./reviewDao.js";
function ReviewRoutes(app) {
  const createReview = async (req, res) => {
    const review = await dao.createReview(req.body);
    res.json(review);
  };
  const findAllReviews = async (req, res) => {
    const reviews = await dao.findAllReviews();
    res.json(reviews);
  };
  const findReviewByCollectionId = async (req, res) => {
    const { collectionId } = req.params;
    const reviews = await dao.findReviewByCollectionId(collectionId);
    res.json(reviews);
  };
  const findReviewByAuthorId = async (req, res) => {
    const { userId } = req.body;
    const reviews = await dao.findReviewByAuthorId(userId);
    res.json(reviews);
  };
  const deleteReview = async (req, res) => {
    const { id } = req.body;
    const status = await dao.deleteReview(id);
    res.json(status);
  }

  app.post("/api/reviews", createReview);
  app.get("/api/reviews", findAllReviews);
  app.get("/api/reviews/:collectionId", findReviewByCollectionId);
  app.get("/api/reviews/by/:userId", findReviewByAuthorId);
  app.delete("/api/reviews/:id", deleteReview);
}
export default ReviewRoutes;
