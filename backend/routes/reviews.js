const reviews = require("express").Router();

const {
  getAllReviewsByStoreId,
  createReview,
  editReview,
  deleteReview,
} = require("../queries/reviews");

reviews.get("/:id", getAllReviewsByStoreId);

reviews.post("/", createReview);

reviews.patch("/:id", editReview);

reviews.delete("/:id", deleteReview);

module.exports = reviews;
