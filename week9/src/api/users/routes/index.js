const authentication = require('../../middleware/authentication');
// const {
//   getUserValidator,
//   modifyUserPwValidator,
//   modifyUserValidator,
// } = require('../../middleware/user.validator');
const { getUser, modifyUser, modifyUserPw } = require('../controllers');

const userRouter = require('express').Router();

userRouter.use(authentication.verify);
/**
 * @description 프로필 조회
 * @routes GET /users/:id
 */
userRouter.get('/', getUser);

/**
 * @description 프로필 수정 (이름 수정)
 * @routes PATCH /users/:id
 * @request @body {name}
 */
userRouter.patch('/', modifyUser);

/**
 * @description 프로필 비밀번호 수정
 * @routes PATCH /users/password/:id
 * @request @body {password, newPassword}
 */
userRouter.patch('/password/', modifyUserPw);

module.exports = userRouter;
