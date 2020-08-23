const businesses = require("express").Router();

const {
  getAllBusiness,
  getSingleBusiness,
  getSearchForBusiness,
  createBusiness,
  editBusiness,
  deleteBusiness,
} = require("../queries/businesses");

businesses.get("/", getAllBusiness);

businesses.get("/:id", getSingleBusiness);

businesses.get("/search/:typeId/:search", getSearchForBusiness);

businesses.post("/", createBusiness);

businesses.patch("/:id", editBusiness);

businesses.delete("/:id", deleteBusiness);

module.exports = businesses;
