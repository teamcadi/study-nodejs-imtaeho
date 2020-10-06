const express = require('express');
const app = express();
const morgan = require('morgan');
const multer = require('multer');
const { upload } = require('./utils/multer.util');

// application middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// router
app.all('/', upload.single('my-file'), (req, res, next) => {
  // req.files
  res.json(req.file);
});

// port binding
app.listen(9000, () => {
  console.log('server start');
});
