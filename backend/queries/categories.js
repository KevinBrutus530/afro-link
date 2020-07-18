const db = require("../db/index");

const getAllCategories = async (req, res, next) => {
    try {
      let category = await db.any("SELECT * FROM types");
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
  try {
    let category = await db.any(`SELECT businesses.id, businesses.biz_name, businesses.hours, addresses.street, addresses.city, addresses.state, addresses.zip, addresses.website,categories.biz_id, categories.type_id, types.id, types.type_name FROM addresses RIGHT JOIN businesses ON businesses.id= address_id JOIN categories ON categories.biz_id=addresses.id JOIN types ON categories.type_id=types.id WHERE types.id = ${req.params.id}`);
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

const createCategory = async (req, res, next) => {
  try {
    let { biz_id,type_id } = req.body
    let categories = await db.one("INSERT INTO categories (biz_id, type_id) VALUES ($1,$2) RETURNING *", [biz_id, type_id]);
    res.status(200).json({
      status: "success",
      message: "created categories",
      payload: categories
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error created categories",
      payload: err
    });
    next();
  }
};



module.exports= { getAllCategories, getSingleCategory, createCategory }