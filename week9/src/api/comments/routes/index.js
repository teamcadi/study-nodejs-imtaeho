const commentRouter = require('express').Router();

/**
 * @description 댓글 조회
 * @routes GET /comments/:id
 */
commentRouter.get('/:id');

/**
 * @description 댓글 수정
 * @routes PUT /comments/:id
 */
commentRouter.put('/:id');

/**
 * @description 댓글 삭제
 * @routes DELETE /comments/:id
 */
commentRouter.delete(':id');

module.exports = commentRouter;
