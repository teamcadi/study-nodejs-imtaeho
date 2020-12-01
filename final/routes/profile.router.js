const { getConn } = require('../database/pool');
const { verify } = require('../middlewares/auth.middleware');
const { profileUpload } = require('../middlewares/multer.middleware');
const router = require('express').Router();

router.use(verify);

router.get('/', async (req, res, next) => {
  const conn = await getConn();
  const [
    rows,
  ] = await conn.query('SELECT id, path FROM user_image WHERE user_id = ?', [
    req.user.id,
  ]);
  conn.release();
  res.status(200).json({
    success: true,
    paths: rows.map(image => ({
      id: image.id,
      path: `http://localhost:9000/${image.path}`,
    })),
  });
});

router.post(
  '/',
  profileUpload.single('profile_image'),
  async (req, res, next) => {
    let conn;
    try {
      conn = await getConn();
      await conn.execute('INSERT INTO user_image(path, user_id) VALUES(?,?)', [
        req.profile,
        req.user.id,
      ]);
    } catch (e) {
      next(e);
    } finally {
      if (conn) conn.release();
      res.status(201).json({ success: true, message: '업로드 성공' });
    }
  },
);

router.delete('/:id', async (req, res, next) => {
  const conn = await getConn();
  await conn.execute('DELETE FROM user_image WHERE id = ?', [req.params.id]);
  conn.release();
  res.status(200).json({ success: true, message: '삭제 완료' });
});

module.exports = router;
