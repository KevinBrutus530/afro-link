const db = require("../db/index");

const getAllBusiness = async (req, res, next) => {
  try {
    let business = await db.any(
      "SELECT * FROM businesses"
      );
    res.status(200).json({
      status: "success",
      message: "all businesses",
      payload: business
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

const getSingleBusiness = async (req, res, next) => {
  try {
    let business = await db.one(
      `SELECT * FROM businesses WHERE id = ${req.params.id}`
    );
    res.status(200).json({
      status: "success",
      message: "single business",
      payload: business
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Couldn't get business",
      payload: err
    });
    next();
  }
};

const deleteBusiness = async (req, res, next) => {
  try {
    let { id } = req.params
    await db.none("DELETE FROM businesses WHERE id=$1", id);
    res.status(200).json({
      status: "success",
      message: "deleted business"
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

const createBusiness = async (req, res, next) => {
  try {
    let {biz_name, hours} = req.body
    let business = await db.one("INSERT INTO businesses (biz_name, hours) VALUES ($1,$2) RETURNING *", [biz_name,hours]);
    res.status(200).json({
      status: "success",
      message: "added business",
      payload: business
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

const editBusiness = async (req, res, next) => {
  try {
    let { biz_name, hours } = req.body;
    let { id } = req.params;
    let business = await db.one(
      `UPDATE businesses SET biz_name='${biz_name}', hours='${hours}' WHERE id='${id}'`
    );
    res.status(200).json({
      status: "success",
      message: "updated business",
      payload: business
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Big Error",
      payload: err
    });
    next();
  }
};

module.exports = {
  getAllBusiness,
  getSingleBusiness,
  createBusiness,
  editBusiness,
  deleteBusiness
};
