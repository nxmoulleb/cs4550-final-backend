import model from "./reviewModel.js";
export const createReview = (review) => {
  return model.create(review);
};
export const findAllReviews = () => {
  return model.find();
};
export const findReviewByAuthorId = (id) => {
  return model.find({ authorId: id });
};
export const findReviewByCollectionId = (id) => {
  return model.find({ collectionId: id });
};
export const deleteReview = (reviewId) => {
  model.deleteOne({ _id: reviewId });
};
