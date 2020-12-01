const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = {
  verify: (req, res, next) => {
    const accessToken = req.headers.authorization;
    if (!accessToken)
      res.status(403).json({ success: false, message: '토큰 없음' });
    else {
      const token = accessToken.split(' ');
      if (token[0] === 'Bearer') {
        const user = jwt.verify(token[1], process.env.SECRET_KEY);
        req.user = user;
        next();
      } else res.status(401).json({ success: false, message: '다시 로그인' });
    }
  },
};

module.exports = authMiddleware;
