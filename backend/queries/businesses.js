const db = require("../db/index");

const getSingleBusiness = async (req, res, next) => {
  try {
    let { id } = req.params;
    let business = await db.any(
      `SELECT * FROM businesses WHERE id= $1`, [id]
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

const getAllBusiness = async (req, res, next) => {
  try {
    let business = await db.any("SELECT * FROM businesses");
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

const deleteBusiness = async (req, res, next) => {
  try {
    let { businessId } = req.params.id;
    let business = await db.none(
      "DELETE FROM businesses WHERE id=$1 RETURNING *",
      businessId
    );
    res.status(200).json({
      status: "success",
      message: "deleted business",
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

const createBusiness = async (req, res, next) => {
  try {
    let business = await db.one(`
        INSERT INTO businesses (biz_name, hours) VALUES ('${req.body.biz_name}', '${req.body.hours}') RETURNING *`);
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
    let { bizName, hours } = req.body;
    let { businessId } = req.params;
    let business = await db.one(
      "UPDATE businesses SET biz_name=$1, hours=$2 WHERE id=$3",
      [bizName, hours, businessId]
    );
    res.status(200).json({
      status: "success",
      message: "updated business",
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

module.exports = {
  getAllBusiness,
  getSingleBusiness,
  createBusiness,
  editBusiness,
  deleteBusiness
};
