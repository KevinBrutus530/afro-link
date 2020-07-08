const addresses = require("express").Router();

const { getSingleAddress , createAddress, editAddress, deleteAddress } = require("../queries/addresses");

addresses.get("/:id", getSingleAddress)

addresses.post("/", createAddress)

addresses.patch("/:id", editAddress)

addresses.delete("/:id", deleteAddress)

module.exports = addresses