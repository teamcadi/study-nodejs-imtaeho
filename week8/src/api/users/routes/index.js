const userRouter = require('express').Router();

/**
 * @description 프로필 조회
 * @routes GET /users/:id
 */
userRouter.get('/:id');

/**
 * @description 프로필 수정
 * @routes PATCH /users/:id
 */
userRouter.patch('/:id');

/**
 * @description 프로필 비밀번호 수정
 * @routes PATCH /users/password/:id
 */
userRouter.patch('/password/:id');

module.exports = userRouter;
