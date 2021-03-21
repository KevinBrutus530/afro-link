const db = require('../db/index');
// const { as } = require('pg-promise');

const signUp = async (req, res, next) => {
  let { user_id, email } = req.body;
  try {
    let user = await db.one(
      'INSERT INTO owners (user_id, email) VALUES($1, $2) RETURNING *',
      [user_id, email]
    );
    res.status(200).json({
      status: 'success',
      message: 'created user',
      payload: user,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'could not create new user',
      payload: err,
    });
    next();
  }
};
const getSingleOwner = async (req, res, next) => {
  try {
    let owner = await db.one(
      `SELECT * FROM owners WHERE user_id =$1`,
      req.params.id
    );
    res.status(200).json({
      status: 'success',
      message: 'single owner',
      payload: owner,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error get single Owner',
      payload: err,
    });
    next();
  }
};

const getBusinessesByUser = async (req, res, next) => {
  try {
    let { id } = req.params;
    let userBusinesses = await db.any(
      `SELECT * FROM businesses JOIN owners ON owners.owner_id = businesses.id LEFT JOIN contacts ON contacts.contact_id = businesses.id LEFT JOIN addresses ON addresses.address_id = businesses.id WHERE owners.user_id=$1`,
      [id]
    );
    res.status(200).json({
      status: 'success',
      message: 'All user businesses by UID',
      payload: userBusinesses,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error getting businesses by owner',
      payload: err,
    });
    next();
  }
};

const deleteOwner = async (req, res, next) => {
  try {
    let { id } = req.params;
    let owner = await db.none('DELETE FROM owners WHERE id =$1', id);
    res.status(200).json({
      status: 'success',
      message: 'deleted owner',
      payload: owner,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error delete owner',
      payload: err,
    });
    next();
  }
};
const createOwner = async (req, res, next) => {
  try {
    let { owner_id, owner_name } = req.body;
    let owner = await db.one(
      'INSERT INTO owners (owner_id, owner_name) VALUES ($1,$2) RETURNING *',
      [owner_id, owner_name]
    );
    res.status(200).json({
      status: 'success',
      message: 'created owner',
      payload: owner,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error for create Owner',
      payload: err,
    });
    next();
  }
};
const editOwner = async (req, res, next) => {
  try {
    let { owner_id, owner_name } = req.body;
    let { uid } = req.params;
    let owner = await db.one(
      'UPDATE owners SET owner_id=$1, owner_name=$2 WHERE user_id=$3 RETURNING *',
      [owner_id, owner_name, uid]
    );
    res.status(200).json({
      status: 'success',
      message: 'updated owner',
      payload: owner,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error edit Owner',
      payload: err,
    });
    next();
  }
};
const editOwnerName = async (req, res, next) => {
  try {
    let { owner_name } = req.body;
    let { owner_id } = req.params;
    let ownerName = await db.one(
      'UPDATE owners SET owner_name=$1 WHERE owner_id=$2 RETURNING *',
      [owner_name, owner_id]
    );
    res.status(200).json({
      status: 'success',
      message: 'updated owner name',
      payload: ownerName,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error edit Owner',
      payload: err,
    });
    next();
  }
};

const imageUpload = async (req, res, next) => {
  try {
    let { pictures } = req.body;
    let { owner_id } = req.params;
    let picture = await db.one(
      'UPDATE owners SET pictures=$1 WHERE owner_id=$2 RETURNING *',
      [pictures, owner_id]
    );
    res.status(200).json({
      status: 'success',
      message: 'updated owner',
      payload: picture,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error Changing Owner Picture',
      payload: err,
    });
    next();
  }
};

module.exports = {
  signUp,
  getBusinessesByUser,
  createOwner,
  editOwner,
  editOwnerName,
  deleteOwner,
  imageUpload,
};
