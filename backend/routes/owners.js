const owners = require('express').Router();
const { checkFirebaseToken } = require('../middleware/auth');

const {
  signUp,
  getSingleOwner,
  getBusinessesByUser,
  createOwner,
  editOwner,
  deleteOwner,
  changeOwnerPicture,
} = require('../queries/owners');

owners.get('/:id', checkFirebaseToken, getBusinessesByUser);

// owners.get("/:id", checkFirebaseToken, getSingleOwner);

owners.post('/', createOwner);

owners.patch('/:uid', editOwner);

owners.patch('/pictures/:owner_id', changeOwnerPicture);

owners.delete('/:id', deleteOwner);

owners.post('/signup', signUp);

module.exports = owners;
