const { body, validationResult } = require('express-validator');

// 로그인(email, password), 회원가입(email, password, name)
const authValidator = {
  loginValidator: async (req, res, next) => {
    await Promise.all([
      body('email')
        .exists()
        .withMessage('이메일 없음')
        .isEmail()
        .withMessage('이메일이 아님')
        .run(req),
      body('password').exists().withMessage('비밀번호 없음').run(req),
    ]);
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(422).json({ success: false, errors: errors.array() });
    else next();
  },
  registerValidator: (req, res, next) => {
    await Promise.all([
        body('email')
          .exists()
          .withMessage('이메일 없음')
          .isEmail()
          .withMessage('이메일이 아님')
          .run(req),
        body('password').exists().withMessage('비밀번호 없음').run(req),
        body('name').exists().withMessage('이름 없음').run(req),
      ]);
      const errors = validationResult(req);
      if (!errors.isEmpty())
        res.status(422).json({ success: false, errors: errors.array() });
      else next();
  },
};

module.exports = authValidator;
