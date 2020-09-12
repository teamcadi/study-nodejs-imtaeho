const router = require('express').Router();
const { users } = require('./database');

// 더미데이터, 가상 데이터베이스
// const user = { id: '1', name: '태호', password: '1234', nickname: 'bbak' };

// [{}, {}, {}, {}, {}]

/**
 * @description 유저들 조회
 * @route GET /
 */
router.get('/', (req, res, next) => {
  const members = users; // 데이터베이스 연동
  res.status(200).json(members);
});

/**
 * @description 유저 가입
 * @route POST /
 * @request @body {name, password, nickname}
 */
router.post('/', function (req, res, next) {
  const { name, password, nickname } = req.body;
  const lastId = users[users.length - 1].id; // '5'
  const userId = Number(lastId) + 1 + ''; // '6'
  const user = { id: userId, name, password, nickname };
  users.push(user);
  res.status(201).json({ success: true, message: '가입 성공' });
});

// http/1.1

// mysql, mariaDB

module.exports = router;
