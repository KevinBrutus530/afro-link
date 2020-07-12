const categories = require("express").Router();

const { getAllCategories, getSingleCategory } = require("../queries/categories");

categories.get("/", getAllCategories)

categories.get("/:id", getSingleCategory);

// categories.post("/", createCategory);

// businesses.patch("/:id", editCategory);

// businesses.delete("/:id", deleteCategory);

module.exports= categories;