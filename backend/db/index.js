const pgp = require('pg-promise')({});
const db = pgp("postgress://localhost:5432/afro_link");
module.exports = db;