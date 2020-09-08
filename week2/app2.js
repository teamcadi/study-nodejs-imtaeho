const express = require('express');
const app = express();
const morgan = require('morgan');

// // 애플리케이션 레벨에서 미들웨어 등록
// app.use((req, res, next) => {
//   console.log('미들웨어 동작');
// });

// 로거 만들기
// 클라이언트에서 요청이 왔을 때 응답을 잘 했는지 못 했는지 로그를 남겨서 수집하는 것
// app.use((req, res, next) => {
//   next(); // 이게 끝나고
//   const date = new Date();
//   const method = req.method;
//   const uri = req.originalUrl;
//   const ip = req.ip;

//   console.log(`${method} ${uri} ${ip} ${date}`); // 이게 실행됨
// });
app.use(morgan('dev'));

// api 구현
app.get('/', (req, res, next) => {
  console.log('api');
  res.status(200);
  res.send('비밀 데이터');
});

app.listen(9001, () => {
  console.log('9001 실행 중');
});
