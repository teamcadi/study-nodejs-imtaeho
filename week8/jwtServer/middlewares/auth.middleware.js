const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwt.config');
const users = require('../database/users');

const authMiddleware = {
  isLogin: (req, res, next) => {
    // 1. 토큰이 있는지 없는지 validator
    // 2. 헤더에서 토큰값 가져오기
    const token = req.headers.authorization.split(' ')[1];
    if (!token) res.status(401).json({ success: false, message: '토큰 없음' });
    else {
      // 3. 토큰 해독하기
      const payload = jwt.verify(token, secretKey);
      // 4. 데이터베이스에서 유저 검색
      const user = users.find(user => user.id == payload.userId);
      if (!user) res.status(401).json({ success: false, message: '유저 없음' });
      else {
        // 5. 다음 미들웨어(컨드롤러)에서 user 객체를 사용할 수 있도록 전달
        req.user = user;
        next();
      }
    }
  },
};

module.exports = authMiddleware;
