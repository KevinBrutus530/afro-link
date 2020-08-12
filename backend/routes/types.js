const types = require("express").Router();

const {getSingleType, createType } = require("../queries/types");


types.get("/:id", getSingleType);
types.post("/", createType);

module.exports= types;