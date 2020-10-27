const users = require('../database/user');
const router = require('express').Router();
const bcrypt = require('bcrypt');

function validator(req, res, next) {
  const { email, password } = req.body;
  if (!(email && password))
    res.status(400).json({ success: false, message: '잘 입력하세요' });
  else next();
}
/**
 * @description 회원가입
 * @routes POST /auth/register
 * @request @body {email, password}
 */
router.post('/register', validator, async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    // todo: DB create
    // todo: email 겹치지 않게 -> db email unique-key
    users.push({ id: 5, email: email, password: hashPassword });
    res.status(201).json({ success: true, message: '가입 성공' });
  } catch (e) {
    next(e);
  }
});

/**
 * @description 로그인
 * @routes POST /auth/login
 * @request @body {email, password}
 */
router.post('/login', validator, async (req, res, next) => {
  const { email, password } = req.body; // 여기 비밀번호는 평문!
  try {
    // todo: DB select
    const user = users.find(user => user.email == email);
    // const user = users.find(user => {
    //   return user.email == email;
    // });
    // const user = users.find(function (user) {
    //   return user.email == email;
    // });
    if (!user) res.status(403).json({ success: false, message: '없는 이메일' });
    else {
      user.password; // 디비에 저장된 비밀번호는 암호화된 비밀번호
      if (await bcrypt.compare(password, user.password)) {
        // 로그인 성공
        req.session.isLogin = true;
        req.session.email = email;
        req.session.userId = user.id;
        res.status(201).json({ success: true, message: '로그인 성공' });
      } else {
        // 비밀번호 틀림(로그인 실패)
        res.status(403).json({ success: false, message: '비밀번호 틀림' });
      }
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
