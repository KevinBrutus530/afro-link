const db = require('../db/index');

const getAllCategories = async (req, res, next) => {
  try {
    let category = await db.any('SELECT * FROM types');
    res.status(200).json({
      status: 'success',
      message: 'recieved all categories',
      payload: category,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: "Couldn't get categories",
      payload: err,
    });
    next();
  }
};

const getSingleCategory = async (req, res, next) => {
  try {
    let category = await db.any(`SELECT businesses.id AS BIZ_ID, businesses.biz_name, addresses.*
    FROM businesses
    LEFT JOIN addresses ON businesses.id = addresses.address_id
    WHERE businesses.id IN (
                      SELECT biz_id FROM categories
                        WHERE type_id = ${req.params.id}
                    )
    ORDER BY businesses.biz_name ASC
                    `);
    res.status(200).json({
      status: 'success',
      message: 'single category',
      payload: category,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error',
      payload: err,
    });
    next();
  }
};

const createCategory = async (req, res, next) => {
  try {
    let { biz_id, type_id } = req.body;
    let categories = await db.one(
      'INSERT INTO categories (biz_id, type_id) VALUES ($1,$2) RETURNING *',
      [biz_id, type_id]
    );
    res.status(200).json({
      status: 'success',
      message: 'created categories',
      payload: categories,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error',
      message: 'Error created categories',
      payload: err,
    });
    next();
  }
};

module.exports = { getAllCategories, getSingleCategory, createCategory };
