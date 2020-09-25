const { getTodo, addTodo, isCompleted, modifyTodo, removeTodo } = require('../controllers/todo.controller');

const router = require('express').Router();

/**
 * @description 모두 조회
 * @route GET /todo
 */
router.get('/', getTodo);

/**
 * @description todo 생성
 * @route POST /todo
 * @request @body {title, date}
 */
router.post('/', addTodo);

/**
 * @description todo 삭제
 * @route DELETE /todo/:id
 */
router.delete('/:id', removeTodo);

/**
 * @description todo title or date 수정
 * @route PATCH /todo/:id
 * @request @body {title, date}
 */
router.patch('/:id', modifyTodo);

/**
 * @description todo 완료
 * @route PATCH /todo/completed/:id
 */
router.patch('/completed/:id', isCompleted);

module.exports = router;
