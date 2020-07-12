const db = require("../db/index");

const getAllCategories = async (req, res, next) => {
    try {
      let category = await db.any("SELECT * FROM categories");
      res.status(200).json({
        status: "success",
        message: "recieved all categories",
        payload: category
      });
    } catch (err) {
      res.status(400).json({
        status: "Error",
        message: "Couldn't get categories",
        payload: err
      });
      next();
    }
  };

const getSingleCategory = async (req, res, next) => {
  // let categoryId = req.params.id;
  try {
    let category = await db.one(`SELECT * FROM categories WHERE id=${req.params.id}`);
    res.status(200).json({
      status: "success",
      message: "single category",
      payload: category
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error",
      payload: err
    });
    next();
  }
};



module.exports= { getAllCategories, getSingleCategory }