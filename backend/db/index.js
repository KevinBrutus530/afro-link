const pgp = require('pg-promise')({});
require('dotenv').config();
const db = pgp({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // This allows self-signed certificates; adjust as needed
  },
});
module.exports = db;
