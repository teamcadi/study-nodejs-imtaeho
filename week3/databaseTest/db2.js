const mysql = require('mysql2/promise');

//(익명함수)()
(async function () {
  const pool = mysql.createPool({
    host: '127.0.0.1', // '127.0.0.1'
    user: 'root',
    password: '9036',
    database: 'cadi',
    waitForConnections: true,
    connectionLimit: 10,
  });

  const conn1 = await pool.getConnection();
  const conn2 = await pool.getConnection();
  const conn3 = await pool.getConnection();
  const conn4 = await pool.getConnection();

  //   const [[row]] = await conn.query('select * from todo');
  //   console.log(row.title);
})();
