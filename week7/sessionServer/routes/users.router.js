const users = require('../database/user');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.json(users);
});

/**
 * @description 내 정보 조회하기
 * @routes GET /users/:id
 */
router.get('/:id', (req, res, next) => {});

module.exports = router;
