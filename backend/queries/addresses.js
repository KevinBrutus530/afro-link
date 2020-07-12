const db = require("../db/index");

// const getAllReviews = async (req, res, next) => {
//   try {
//     let review = await db.one("SELECT * FROM reviews");
//     res.status(200).json({
//       status: "success",
//       message: "recieved all reviews",
//       payload: review
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "Error",
//       message: "Couldn't get reviews",
//       payload: err
//     });
//     next();
//   }
// };

const getSingleAddress = async (req, res, next) => {
  let addressId = req.params.id;
  try {
    let review = await db.any(`SELECT * FROM addresses WHERE id=${addressId}`);
    res.status(200).json({
      status: "success",
      message: "single Address",
      payload: address
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

const deleteAddress = async (req, res, next) => {
  try {
    let { addressId } = req.params.id;
    let address = await db.none("DELETE FROM addresses WHERE id=$1 RETURNING *",[addressId]);
    res.status(200).json({
      status: "success",
      message: "deleted address",
      payload: address
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

const createAddress = async (req, res, next) => {
  try {
    let address = await db.one(`
            INSERT INTO addresses (address_id, street, city, state, zip, website) VALUES ('${req.body.address_id}', '${req.body.street}', '${req.body.city}', '${req.body.state}', '${req.body.zip}', '${req.body.website}') RETURNING *`);
    res.status(200).json({
      status: "success",
      message: "created review",
      payload: address
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

const editAddress = async (req, res, next) => {
  try {
    let { address_id, street, city, state, zip, website } = req.body;
    let { addressId } = req.params;
    let address = await db.one(
      "UPDATE reviews SET review_id=$1, text=$2 name=$3, ratings=$4, zip=$5 WHERE id=$5",
      [address_id, street, city, state, zip, website, addressId]
    );
    res.status(200).json({
      status: "success",
      message: "updated address",
      payload: address
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

module.exports = { getSingleAddress , createAddress, editAddress, deleteAddress };