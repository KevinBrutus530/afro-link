const db = require("../db/index");

const signUp = async (req, res, next) => {
  // const { id, email } = req.body;
  try {
    await db.none('INSERT INTO owners(id, email) VALUES (${id}, ${email})',
      req.body
    );
    res.json({
      message: "New Owner Created",
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error cannot sign up Owner",
      payload: err,
    });
    next(err);
  }
};

const getSingleOwner = async (req, res, next) => {
  try {
    let owner = await db.one(`SELECT * FROM owners WHERE id =${req.params.id}`);
    res.status(200).json({
      status: "success",
      message: "single owner",
      payload: owner,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error get single Owner",
      payload: err,
    });
    next();
  }
};

const deleteOwner = async (req, res, next) => {
  try {
    let { id } = req.params;
    let owner = await db.none("DELETE FROM owners WHERE id =$1", id);
    res.status(200).json({
      status: "success",
      message: "deleted owner",
      payload: owner,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error delete owner",
      payload: err,
    });
    next();
  }
};

const createOwner = async (req, res, next) => {
  try {
    let { owner_id, owner_name } = req.body;
    let owner = await db.one(
      "INSERT INTO owners (owner_id, owner_name) VALUES ($1,$2) RETURNING *",
      [owner_id, owner_name]
    );
    res.status(200).json({
      status: "success",
      message: "created owner",
      payload: owner,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error for create Owner",
      payload: err,
    });
    next();
  }
};

const editOwner = async (req, res, next) => {
  try {
    let { owner_id, owner_name } = req.body;
    let { id } = req.params;
    let owner = await db.one(
      "UPDATE owners SET owner_id=$1, owner_name=$2 WHERE id=$3",
      [owner_id, owner_name, id]
    );
    res.status(200).json({
      status: "success",
      message: "updated owner",
      payload: owner,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error edit Owner",
      payload: err,
    });
    next();
  }
};

module.exports = {
  signUp,
  getSingleOwner,
  createOwner,
  editOwner,
  deleteOwner,
};
