const { signup, signIn } = require('../services');

const authController = {
  register: async (req, res, next) => {
    // todo : validator
    const result = await signup(req.body);
    if (result instanceof Error) next(result);
    else res.status(201).json({ success: true });
  },
  login: async (req, res, next) => {
    // todo : validator
    const result = await signIn(req.body);
    if (result instanceof Error) next(result);
    else res.status(201).json(result);
  },
};

module.exports = authController;
