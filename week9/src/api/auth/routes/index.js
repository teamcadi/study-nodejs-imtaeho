const authController = require('../controllers');
const router = require('express').Router();

/**
 * @description 회원가입
 * @routes POST /auth/register
 * @request @body {email, name, password}
 */
router.post('/register', authController.register);

/**
 * @description 로그인
 * @routes POST /auth/login
 * @request @body {email, password}
 */
router.post('/login', authController.login);

module.exports = router;
