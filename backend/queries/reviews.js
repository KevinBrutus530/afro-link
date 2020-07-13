const db = require("../db/index");

const getAllReviews = async (req, res, next) => {
  try {
    let review = await db.any("SELECT * FROM reviews");
    res.status(200).json({
      status: "success",
      message: "recieved all reviews",
      payload: review
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Couldn't get reviews",
      payload: err
    });
    next();
  }
};

const getSingleReview = async (req, res, next) => {
  try {
    let review = await db.one(`SELECT * FROM reviews WHERE id=${req.params.id}`);
    res.status(200).json({
      status: "success",
      message: "single review",
      payload: review
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error",
      payload: err
    });
    next();
  }
};

const deleteReview = async (req, res, next) => {
  try {
    let { id } = req.params;
    let review = await db.none("DELETE FROM reviews WHERE id=$1",
      [id]
    );
    res.status(200).json({
      status: "success",
      message: "deleted review",
      payload: review
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error",
      payload: err
    });
    next();
  }
};

const createReview = async (req, res, next) => {
  try {
    let { review_id, text, name, ratings, zip } = req.body
    let review = await db.one("INSERT INTO reviews (review_id, text, name, ratings) VALUES ($1,$2, $3, $4) RETURNING *", [review_id, text, name, ratings, zip]);
    res.status(200).json({
      status: "success",
      message: "created review",
      payload: review
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error",
      payload: err
    });
    next();
  }
};

const editReview = async (req, res, next) => {
  try {
    let { review_id, text, name, ratings, zip } = req.body;
    let { reviewId } = req.params;
    let review = await db.one(
      "UPDATE reviews SET review_id=$1, text=$2 name=$3, ratings=$4, zip=$5 WHERE id=$5",
      [review_id, text, name, ratings, zip, reviewId]
    );
    res.status(200).json({
      status: "success",
      message: "updated review",
      payload: review
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error",
      payload: err
    });
    next();
  }
};

module.exports = {
  getAllReviews,
  getSingleReview,
  createReview,
  editReview,
  deleteReview
};
