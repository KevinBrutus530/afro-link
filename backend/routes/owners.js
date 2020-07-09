const owners = require("express").Router();

const { getSingleOwner , createOwner, editOwner, deleteOwner } = require("../queries/businesses");


owners.get("/:id", getSingleOwner);

owners.post("/", createOwner);

owners.patch("/:id", editOwner);

owners.delete("/:id", deleteOwner);

module.exports= businesses;