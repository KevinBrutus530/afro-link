const db = require('../db/index');

const getSingleAddress = async (req, res, next) => {
  try {
    const { address_id } = req.params;
    let address = await db.one(`SELECT * FROM addresses WHERE address_id=$1`, [
      address_id,
    ]);
    res.status(200).json({
      status: 'success',
      message: 'single Address',
      payload: address,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error getting single Address',
      payload: err,
    });
    next();
  }
};

const deleteAddress = async (req, res, next) => {
  try {
    let { id } = req.params;
    let address = await db.none('DELETE FROM addresses WHERE id =$1', id);
    res.status(200).json({
      status: 'success',
      message: 'deleted address',
      payload: address,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error deleting address',
      payload: err,
    });
    next();
  }
};

const createAddress = async (req, res, next) => {
  try {
    let { address_id, street, city, state, zip, website } = req.body;
    let address = await db.one(
      'INSERT INTO addresses (address_id, street, city, state, zip, website) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
      [address_id, street, city, state, zip, website]
    );
    res.status(200).json({
      status: 'success',
      message: 'created Address',
      payload: address,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error create address',
      payload: err,
    });
    next();
  }
};

const editAddress = async (req, res, next) => {
  try {
    let { street, city, state, zip, website } = req.body;
    let { address_id } = req.params;
    let address = await db.one(
      'UPDATE addresses SET street=$1, city=$2, state=$3, zip=$4, website=$5 WHERE address_id=$6 RETURNING *',
      [street, city, state, zip, website, address_id]
    );
    res.status(200).json({
      status: 'success',
      message: 'updated address',
      payload: address,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error update address',
      payload: err,
    });
    next();
  }
};

module.exports = {
  getSingleAddress,
  createAddress,
  editAddress,
  deleteAddress,
};
