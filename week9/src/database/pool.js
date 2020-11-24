require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'board',
  waitForConnections: true,
  connectionLimit: 5,
});

// (async () => {
//   const conn = await pool.getConnection();

//   // create database, table
//   // await conn.execute('create database board');
//   // todo: post, comment, like, image
// })();

module.exports = {
  getConn: () => pool.getConnection(),
};
