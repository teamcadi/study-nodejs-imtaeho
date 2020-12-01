const multer = require('multer');
const path = require('path');

const profileUpload = multer({
  fileFilter: (req, file, cb) => {
    if (!file) cb(new Error('업로드 필요'));
    let type = file.originalname.split('.')[1];
    type = type.toLocaleLowerCase();
    if (type === 'png' || type === 'jpg' || type === 'jpeg') cb(null, true);
    else cb(null, false);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'upload');
    },
    filename: (req, file, cb) => {
      const type = file.originalname.split('.')[1];
      req.profile = 'upload' + '/' + `${Date.now()}.${type}`;
      cb(null, `${Date.now()}.${type}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

module.exports = {
  profileUpload,
};
