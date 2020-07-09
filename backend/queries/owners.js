const db = require("../db/index");

const getSingleOwner = async (req, res, next) => {
  let ownerId = req.params.id;
  try {
    let owner = await db.any(`SELECT * FROM owners WHERE id=${ownerId}`);
    res.status(200).json({
      status: "success",
      message: "single owner",
      payload: owner
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

const deleteOwner = async (req, res, next) => {
  try {
    let { ownerId } = req.params.id;
    let owner = await db.none(
      "DELETE FROM owners WHERE id=$1 RETURNING *",
      ownerId
    );
    res.status(200).json({
      status: "success",
      message: "deleted owner",
      payload: owner
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

const createOwner = async (req, res, next) => {
  try {
    let owner = await db.one(`
            INSERT INTO owners (owner_id, text, name, ratings, zip) VALUES ('${req.body.review_id}', '${req.body.text}', '${req.body.name}', '${req.body.ratings}', '${req.body.zip}') RETURNING *`);
    res.status(200).json({
      status: "success",
      message: "created owner",
      payload: owner
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

const editOwner = async (req, res, next) => {
  try {
    let { ownerid, ownername } = req.body;
    let { ownerId } = req.params;
    let review = await db.one(
      "UPDATE owners SET owner_id=$1, owner_name=$2 WHERE id=$3",
      [ownerid, ownername, ownerId]
    );
    res.status(200).json({
      status: "success",
      message: "updated owner",
      payload: business
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

module.exports = { getSingleOwner, createOwner, editOwner, deleteOwner };
