const owners = require("express").Router();
const { checkFirebaseToken } = require("../middleware/auth");

const { signUp, getSingleOwner , createOwner, editOwner, deleteOwner } = require("../queries/owners");

owners.get("/:id", checkFirebaseToken, getSingleOwner);

owners.post("/", createOwner);

owners.patch("/:id", editOwner);

owners.delete("/:id", deleteOwner);

owners.post("/signup", signUp)

module.exports= owners;

