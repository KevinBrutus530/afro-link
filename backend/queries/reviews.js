const db = require("../db/index");

const getAllReviews = async (req, res, next) => {
  try {
    let review = await db.one("SELECT * FROM reviews");
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
  let reviewId = req.params.id;
  try {
    let review = await db.any(`SELECT * FROM reviews WHERE id=${reviewId}`);
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
    let { reviewId } = req.params.id;
    let review = await db.none(
      "DELETE FROM businesses WHERE id=$1 RETURNING *",
      [reviewId]
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
    let review = await db.one(`
            INSERT INTO businesses (review_id, text, name, ratings, zip) VALUES ('${req.body.review_id}', '${req.body.text}', '${req.body.name}', '${req.body.ratings}', '${req.body.zip}') RETURNING *`);
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
      "UPDATE reviews SET review_id=$1, text=$2 name=$3, ratings=$4, zip=$5 WHERE id=$3",
      [review_id, text, name, ratings, zip, reviewId]
    );
    res.status(200).json({
      status: "success",
      message: "updated business",
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
