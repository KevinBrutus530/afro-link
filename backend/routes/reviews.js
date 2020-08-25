const reviews = require("express").Router();

const {
  getAllReviewsByStoreId,
  createReview,
  editReview,
  deleteReview,
  createReviewReply
} = require("../queries/reviews");

reviews.get("/:id", getAllReviewsByStoreId);

reviews.post("/", createReview);

reviews.post("/reply/:reply_id", createReviewReply);

reviews.patch("/:id", editReview);

reviews.delete("/:id", deleteReview);

module.exports = reviews;
