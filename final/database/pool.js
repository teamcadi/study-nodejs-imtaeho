const db = require('mysql2/promise');
require('dotenv').config();

const pool = db.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'cadi_final',
  waitForConnections: true,
  connectionLimit: 5,
});

module.exports = {
  getConn: _ => pool.getConnection(),
};
