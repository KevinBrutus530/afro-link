const owners = require('express').Router();
const { checkFirebaseToken } = require('../middleware/auth');

const {
  signUp,
  getBusinessesByUser,
  createOwner,
  editOwner,
  editOwnerName,
  deleteOwner,
  imageUpload,
} = require('../queries/owners');

owners.get('/:id', checkFirebaseToken, getBusinessesByUser);

owners.post('/', createOwner);

owners.patch('/:uid', editOwner);

owners.patch('/user/:owner_id', editOwnerName);

owners.patch('/pictures/:owner_id', imageUpload);

owners.delete('/:id', deleteOwner);

owners.post('/signup', signUp);

module.exports = owners;
