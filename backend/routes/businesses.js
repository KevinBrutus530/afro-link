const businesses = require("express").Router();

const { getAllBusiness, getSingleBusiness , createBusiness, editBusiness, deleteBusiness } = require("../queries/businesses");

businesses.get("/", getAllBusiness)

businesses.get("/:id", getSingleBusiness);

businesses.post("/", createBusiness);

businesses.patch("/:id", editBusiness);

businesses.delete("/:id", deleteBusiness);

module.exports= businesses;