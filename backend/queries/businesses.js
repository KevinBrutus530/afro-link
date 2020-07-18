const db = require("../db/index");

const getAllBusiness = async (req, res, next) => {
  try {
    let business = await db.any(
      "SELECT businesses.id, businesses.biz_name, businesses.hours, addresses.street, addresses.city, addresses.state, addresses.zip, addresses.website, contacts.phone, contacts.email, contacts.social_media, types.type_name, owners.owner_name FROM contacts RIGHT JOIN addresses ON addresses.address_id=contact_id JOIN owners ON owners.owner_id=addresses.address_id JOIN businesses  ON businesses.id=owners.owner_id JOIN categories ON categories.biz_id=addresses.address_id JOIN types ON types.id=categories.type_id"
      );
    res.status(200).json({
      status: "success",
      message: "all businesses",
      payload: business
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Error get all business",
      payload: err
    });
    next();
  }
};



const getSingleBusiness = async (req, res, next) => {
  try {
    let business = await db.one(
      `SELECT businesses.id, businesses.biz_name, businesses.hours, addresses.street, addresses.city, addresses.state, addresses.zip, addresses.website, contacts.phone, contacts.email, contacts.social_media, types.type_name, owners.owner_name FROM contacts RIGHT JOIN addresses ON addresses.address_id=contact_id JOIN owners ON owners.owner_id=addresses.address_id JOIN businesses  ON businesses.id=owners.owner_id JOIN categories ON categories.biz_id=addresses.address_id JOIN types ON types.id=categories.type_id WHERE businesses.id =${req.params.id}`
    );
    res.status(200).json({
      status: "success",
      message: "single business",
      payload: business
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: "Couldn't get single business",
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
      message: "Error deleting business",
      payload: err
    });
    next();
  }
};

const getSearchForBusiness = async (req, res, next) => {
  try{
    let searchBiz = req.body.type_name
    let business = await db.any(`SELECT businesses.id, businesses.biz_name, businesses.hours, owners.owner_name, types.type_name,contacts.phone, contacts.email, contacts.social_media, addresses.street, addresses.city, addresses.state, addresses.zip, addresses.website FROM businesses RIGHT JOIN contacts ON contacts.contact_id=businesses.id JOIN addresses ON addresses.address_id=contacts.contact_id JOIN owners ON contacts.contact_id=owners.owner_id JOIN categories ON categories.biz_id=owners.owner_id JOIN types ON types.id=categories.type_id WHERE types.type_name LIKE '%${searchBiz}%'`)
      res.status(200).json({
        status: "success",
        message: "found businesses",
        payload: business

      })
  } catch(err){
    res.status(400).json({
      status: "Error",
      message: "Error get search Business",
      payload: err
    });
    next();
  }
}

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
      message: "Error create business",
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
      message: "Error for update business",
      payload: err
    });
    next();
  }
};

module.exports = {
  getAllBusiness,
  getSingleBusiness,
  getSearchForBusiness,
  createBusiness,
  editBusiness,
  deleteBusiness
};
