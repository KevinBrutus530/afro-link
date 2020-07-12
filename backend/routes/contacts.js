const contacts = require("express").Router();

const { getSingleContact , createContact, editContact, deleteContact } = require("../queries/contacts");


contacts.get("/:id", getSingleContact);

contacts.post("/", createContact);

contacts.patch("/:id", editContact);

contacts.delete("/:id", deleteContact);

module.exports= contacts;