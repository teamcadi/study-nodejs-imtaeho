const { findUser, updateUser, updateUserPw } = require('../services');

// todo: 내가 쓴 글 조회
const userController = {
  getUser: async (req, res, next) => {
    const { id } = req.user;
    const result = await findUser({ id });
    if (result instanceof Error) next(result);
    else res.status(200).json({ success: true, user: result });
  },
  modifyUser: async (req, res, next) => {
    const { id } = req.user;
    const { name } = req.body;
    const result = await updateUser({ id, name });
    if (result instanceof Error) next(result);
    else res.status(200).json({ success: true, result });
  },
  modifyUserPw: async (req, res, next) => {
    const { id } = req.user;
    const { password, newPassword } = req.body;
    const result = await updateUserPw({ id, password, newPassword });
    if (result instanceof Error) next(result);
    else res.status(200).json(result);
  },
};

module.exports = userController;
