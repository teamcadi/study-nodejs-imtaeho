const express = require('express');
const app = express();
const path = require('path');

// 정적 파일을 제공하는 api
// 애플리케이션 레벨에서 미들웨어를 등록하는 메서드
// 프로필 사진
// 배너 이미지

// 상대경로
// app.use("/public", express.static("public"));

// * 미들웨어
// todo: 클라이언트가 서버로 요청, 서버는 응답
// ? : 사용자 인증, 요청받은 데이터 검사(validator), 바디파서

// 1
app.use(express.json()); // -> (req,res,next)=>{ //로직; next(); }
// 2
app.use(express.urlencoded({ extended: true }));
// 3
app.use('/public', express.static(path.join(__dirname, 'public')));
// 4
app.post('/', (req, res) => {
  const data = req.body;
  console.log(data);
  console.log(data.name);
  // 디비에 유저 생성
  // 수정
  // 등등
});

// app이 많은 기능을 포함하고 서버를 열었다.
app.listen(9000, () => {
  console.log('서버 실행 중');
});
