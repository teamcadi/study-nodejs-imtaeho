const express = require('express');
const morgan = require('morgan');
const app = express();

// 애플리케이션 레벨 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// 라우터 등록
app.use('/todo', require('./routes/todo.router'));

// 포트 바인딩
app.listen(9000, () => {
  console.log('9000번 실행중');
});
