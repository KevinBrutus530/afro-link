const owners = require("express").Router();

const { getSingleOwners , createOwner, editOwner, deleteOwner } = require("../queries/businesses");


owners.get("/:id", getSingleOwners);

owners.post("/", createOwner);

owners.patch("/:id", editOwner);

owners.delete("/:id", deleteOwner);

module.exports= businesses;