const pgp = require('pg-promise')({});
require("dotenv").config();
// const db = pgp(process.env.DATABASE_URL);
const db = pgp({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // Required for Heroku Postgres
    },
  });
module.exports = db;