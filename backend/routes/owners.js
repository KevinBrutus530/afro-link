const owners = require("express").Router();


const { signUp, getSingleOwner , createOwner, editOwner, deleteOwner } = require("../queries/owners");


owners.get("/:id", getSingleOwner);

// owners.post("/signup", signUp)

owners.post("/", signUp, createOwner);

owners.patch("/:id", editOwner);

owners.delete("/:id", deleteOwner);



module.exports= owners;

