const bcrypt = require('bcrypt');
const { getConn } = require('../database/pool');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
require('dotenv').config();

router.post('/login', async (req, res, next) => {
  let conn;
  let result;
  try {
    conn = await getConn();
    const { email, password } = req.body;
    const [[user]] = await conn.query('SELECT * FROM user WHERE email = ?', [
      email,
    ]);
    if (!user) result = { success: false, message: '없는 이메일' };
    else if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { id: user.id, email: user.email, name: user.name },
        process.env.SECRET_KEY,
      );
      result = { success: true, token: token };
    } else result = { success: false, message: '비번 틀림' };
  } catch (e) {
    next(e);
  } finally {
    if (conn) conn.release();
    res.status(201).json(result);
  }
});

router.post('/register', async (req, res, next) => {
  let conn;
  try {
    conn = await getConn();
    const { email, name, password } = req.body;
    const hashPw = await bcrypt.hash(password, 11);
    await conn.execute(
      `
        INSERT INTO user(email, name, password)
        VALUES(?,?,?)
      `,
      [email, name, hashPw],
    );
  } catch (e) {
    next(e);
  } finally {
    if (conn) conn.release();
    res.status(201).json({ success: true });
  }
});

module.exports = router;
