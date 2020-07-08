const reviews = require("express").Router();

const { getAllReviews, getSingleReview , createReview, editReview, deleteReview } = require("../queries/reviews");

reviews.get("/", getAllReviews)

reviews.get("/:id", getSingleReview);

reviews.post("/", createReview);

reviews.patch("/:id", editReview);

reviews.delete("/:id", deleteReview);

module.exports= reviews;