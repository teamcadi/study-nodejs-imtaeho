const { getConn } = require('../../../database/pool');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authService = {
  signup: async ({ email, name, password }) => {
    let conn;
    let result = false;
    try {
      conn = await getConn();
      const salt = await bcrypt.genSalt(12);
      const hashPw = await bcrypt.hash(password, salt);
      await conn.execute(
        'INSERT INTO user(email, name, password) VALUES(?, ?, ?);',
        [email, name, hashPw],
      );
      result = true;
    } catch (e) {
      console.error(e);
      result = e;
    } finally {
      if (conn) conn.release(); // 반환
      return result;
    }
  },

  signIn: async ({ email, password }) => {
    let conn;
    let result;
    try {
      conn = await getConn(); // 연결 객체 가져오기
      const [rows] = await conn.query('SELECT * FROM user WHERE email = ?;', [
        email,
      ]); // db에 유저 정보 확인하기
      if (rows.length == 0)
        // 이메일이 없다면
        result = { success: false, message: '없는 이메일입니다.' };
      else {
        // 이메일이 있다면
        if (await bcrypt.compare(password, rows[0].password)) {
          // 비밀번호가 같다면
          const token = jwt.sign(
            // 토큰 생성
            { id: rows[0].id, email },
            process.env.JWT_SECRET,
          );
          result = { success: true, message: '로그인 성공', token };
        } else result = { success: false, message: '비밀번호 틀림' }; // 비밀번호가 틀리다면
      }
    } catch (e) {
      // 모든 예외 처리
      console.error(e);
      result = e;
    } finally {
      if (conn) conn.release(); // 연결 객체 반납하기
      return result;
    }
  },
};

module.exports = authService;
