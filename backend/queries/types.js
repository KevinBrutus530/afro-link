const db = require("../db/index");

const getSingleType = async (req, res, next) => {
  try {
    let type = await db.any(`SELECT * FROM types WHERE id = ${req.params.id}`);
    res.status(200).json({
      status: "success",
      message: "single type",
      payload: type
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

const createType = async (req, res, next) => {
  try {
    let { type_name } = req.body
    let categories = await db.one("INSERT INTO types (type_name) VALUES ($1) RETURNING *", [type_name]);
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



module.exports= { getSingleType, createType }