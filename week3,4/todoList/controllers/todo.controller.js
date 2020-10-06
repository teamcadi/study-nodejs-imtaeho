const { getConn } = require('../database/pool');
const { format } = require('mysql2');

module.exports = {
  getTodo: async (req, res, next) => {
    let conn;
    try {
      conn = await getConn();
      const [rows] = await conn.query('select * from todo');
      res.status(200).json(rows);
      conn.release();
    } catch (getTodoErr) {
      if (conn) conn.release();
      next(getTodoErr);
    }
  },
  addTodo: async (req, res, next) => {},
  removeTodo: async (req, res, next) => {
    let conn;
    const { id } = req.params;
    try {
      conn = await getConn();
      // 1
      await conn.execute('delete from todo where id = ?', [id]);
      res.status(200).json({ success: true });
      conn.release();
    } catch (error) {
      if (conn) conn.release();
      next(getTodoErr);
    }
  },
  modifyTodo: async (req, res, next) => {},
  isCompleted: async (req, res, next) => {},
};
