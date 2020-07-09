const db = require("../db/index");

const getSingleContact = async (req, res, next) => {
    let contactId = req.params.id;
    try {
      let review = await db.any(`SELECT * FROM contacts WHERE id=${contactId}`);
      res.status(200).json({
        status: "success",
        message: "single contact",
        payload: contact
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
  
  const deleteContact = async (req, res, next) => {
    try {
      let { contactId } = req.params.id;
      let contact = await db.none(
        "DELETE FROM contacts WHERE id=$1 RETURNING *",
        [contactId]
      );
      res.status(200).json({
        status: "success",
        message: "deleted contact",
        payload: contact
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
  
  const createContact = async (req, res, next) => {
    try {
      let contact = await db.one(`
              INSERT INTO contacts (contact_id, phone, email, social_media) VALUES ('${req.body.contact_id}', '${req.body.phone}', '${req.body.email}', '${req.body.social_media}') RETURNING *`);
      res.status(200).json({
        status: "success",
        message: "created contact",
        payload: contact
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
  
  const editContact = async (req, res, next) => {
    try {
      let { contact_id, phone, email, socialmedia } = req.body;
      let { contactId } = req.params;
      let contact = await db.one(
        "UPDATE contacts SET contact_id=$1, phone=$2 email=$3, =$4, social_media=$5 WHERE id=$6",
        [contact_id, phone, email, socialmedia, contactId]
      );
      res.status(200).json({
        status: "success",
        message: "updated contact",
        payload: contact
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

module.exports = { getSingleContact , createContact, editContact, deleteContact }