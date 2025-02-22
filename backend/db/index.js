const pgp = require('pg-promise')({
    // ssl: { rejectUnauthorized: false },
});
require("dotenv").config();
// const db = pgp(process.env.DATABASE_URL);
const db = pgp(process.env.DATABASE_URL);
module.exports = db;