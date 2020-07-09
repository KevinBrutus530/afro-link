const categories = require("express").Router();

const { getAllCategories, getSingleCategory, createCategory, editCategory, deleteCategory } = require("../queries/businesses");

categories.get("/", getAllCategories)

categories.get("/:id", getSingleCategory);

// categories.post("/", createCategory);

// businesses.patch("/:id", editCategory);

// businesses.delete("/:id", deleteCategory);

module.exports= businesses;