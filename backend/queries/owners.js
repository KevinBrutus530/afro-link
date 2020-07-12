const db = require("../db/index");

const getSingleOwner = async (req, res, next) => {
  try {
    let owner = await db.one(`SELECT * FROM owners WHERE id =${req.params.id}`);
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
    let { id } = req.params;
    let owner = await db.none(
      "DELETE FROM owners WHERE id =$1",
      id
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
    let { owner_id, text, name, ratings, zip } = req.body
    let owner = await db.one("INSERT INTO owners (owner_id, text, name, ratings, zip) VALUES ($1, $2, $3, $4, $5,$6)", [owner_id, text, name, ratings, zip]);
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
    let owner = await db.one(
      "UPDATE owners SET owner_id=$1, owner_name=$2 WHERE id=$3",
      [ownerid, ownername, ownerId]
    );
    res.status(200).json({
      status: "success",
      message: "updated owner",
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

module.exports = { getSingleOwner, createOwner, editOwner, deleteOwner };
