/**
 * TODO: validator 구현
 * TODO: 로직 분리
 */

const express = require('express'); // commonjs (import from)
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // process.env.환경변수

if (!fs.existsSync('upload')) fs.mkdirSync('upload');

// Application setting
app.set('PORT', process.env.PORT);

// Application middleware
app.use('/upload', express.static(path.join(__dirname, 'upload')));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// load router
app.use('/auth', require('./routes/auth.router'));
app.use('/profile', require('./routes/profile.router'));

app.listen(app.get('PORT'), err => {
  if (err) {
    console.error(err.message);
    process.exit(0);
  } else console.log('서버 시작중');
});
