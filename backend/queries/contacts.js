const db = require('../db/index');

const getSingleContact = async (req, res, next) => {
  try {
    let contact = await db.one(
      `SELECT businesses.biz_name, businesses.hours, addresses.address_id, addresses.street, addresses.city, addresses.state, addresses.zip, addresses.website,contacts.phone, contacts.email, contacts.social_media FROM contacts RIGHT JOIN addresses ON addresses.address_id=contact_id JOIN businesses  ON businesses.id=contacts.contact_id WHERE businesses.id =${req.params.id}`
    );
    res.status(200).json({
      status: 'success',
      message: 'single contact',
      payload: contact,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error get single contact',
      payload: err,
    });
    next();
  }
};

const deleteContact = async (req, res, next) => {
  try {
    let { id } = req.params.id;
    let contact = await db.none('DELETE FROM contact WHERE id = $1', [id]);
    res.status(200).json({
      status: 'success',
      message: 'deleted contact',
      payload: contact,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error deleting contact',
      payload: err,
    });
    next();
  }
};

const createContact = async (req, res, next) => {
  try {
    let { contact_id, phone, email, social_media } = req.body;
    let contact = await db.one(
      'INSERT INTO contacts (contact_id, phone, email, social_media) VALUES ($1, $2, $3, $4) RETURNING *',
      [contact_id, phone, email, social_media]
    );
    res.status(200).json({
      status: 'success',
      message: 'created contact',
      payload: contact,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error create contact',
      payload: err,
    });
    next();
  }
};

const editContact = async (req, res, next) => {
  try {
    let { phone, email, social_media } = req.body;
    let { contact_id } = req.params;
    let contact = await db.one(
      'UPDATE contacts SET phone=$1, email=$2, social_media=$3 WHERE contact_id=$4 RETURNING *',
      [phone, email, social_media, contact_id]
    );
    res.status(200).json({
      status: 'success',
      message: 'updated contact',
      payload: contact,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error update contact',
      payload: err,
    });
    next();
  }
};

module.exports = {
  getSingleContact,
  createContact,
  editContact,
  deleteContact,
};
