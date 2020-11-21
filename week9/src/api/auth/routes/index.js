const {
  loginValidator,
  registerValidator,
} = require('../../middleware/auth.validator');
const { register, login } = require('../controllers');
const router = require('express').Router();

/**
 * @description 회원가입
 * @routes POST /auth/register
 * @request @body {email, name, password}
 */
router.post('/register', registerValidator, register);

/**
 * @description 로그인
 * @routes POST /auth/login
 * @request @body {email, password}
 */
router.post('/login', loginValidator, login);

// todo: 탈퇴

module.exports = router;
