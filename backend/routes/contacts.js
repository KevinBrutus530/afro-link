const contacts = require("express").Router();

const { getSingleContact , createContact, editContact, deleteContact } = require("../queries/businesses");


contacts.get("/:id", getSingleContact);

contacts.post("/", createContact);

contacts.patch("/:id", editContact);

contacts.delete("/:id", deleteContact);

module.exports= contacts;