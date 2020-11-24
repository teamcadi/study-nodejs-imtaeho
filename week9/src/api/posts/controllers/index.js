const postService = require('../services');

const response = (result, res, next) => {
  if (result instanceof Error) next(result);
  else res.status(200).json(result);
};

const postController = {
  getList: async (req, res, next) => {
    const result = await postService.selectList();
    response(result, res, next);
  },
  getPost: async (req, res, next) => {
    const { id } = req.params;
    const result = await postService.selectPost({ id });
    response(result, res, next);
  },
  addPost: async (req, res, next) => {
    const { title, content } = req.body;
    const result = await postService.insertPost({ title, content });
    response(result, res, next);
  },
  modifyPost: async (req, res, next) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const result = await postService.updatePost({ title, content, id });
    response(result, res, next);
  },
  removePost: async (req, res, next) => {
    const { id } = req.params;
    const result = await postService.deletePost({ id });
    response(result, res, next);
  },
  likePost: async (req, res, next) => {
    const { id: postId } = req.params;
    const { id: userId } = req.user;
    const result = await postService.liked({ postId, userId });
    response(result, res, next);
  },
};

module.exports = postController;
