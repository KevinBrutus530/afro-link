const owners = require("express").Router();

const { signUp, getSingleOwner , createOwner, editOwner, deleteOwner } = require("../queries/owners");

owners.get("/:id", getSingleOwner);

owners.post("/", createOwner);

owners.patch("/:id", editOwner);

owners.delete("/:id", deleteOwner);

owners.post("/signup", signUp);

module.exports= owners;