const multer = require('multer');

// multer setting
const multerOption = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'upload/');
    },
    filename: (req, file, cb) => {
      console.log('filename');
      cb(null, file.originalname);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
};

const upload = multer(multerOption);

module.exports = {
  upload,
};
