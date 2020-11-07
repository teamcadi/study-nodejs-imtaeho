const { isLogin } = require('../middlewares/auth.middleware');
const router = require('express').Router();

router.get('/profile', isLogin, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

module.exports = router;

// 미들웨어에서 next() 만나면 다음 미들웨어가 호출
