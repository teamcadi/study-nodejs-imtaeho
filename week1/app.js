const express = require("express");
const app = express();

/**
 * @description 최상단 경로이므로 루트 경로라고 함 (웹사이트라면 홈페이지)
 * @route GET /
 * todo : queryString
 */
app.get("/", (req, res) => {
  // const a = req.query.a;
  // const b = req.query.b; 코드와 동일
  const { a, b } = req.query;

  // parseInt(a)도 가능
  const result = Number(a) + Number(b);
  res.send(`홈 페이지 ${result}`);
});

/**
 * @description parameter 맛보기
 * @route GET /:name
 * todo: parameter
 */
app.get("/:name", function (req, res) {
  // const name = req.params.name 코드와 동일
  const { name } = req.params;
  res.send(`${name}님 환영해여`);
});

// 9000 포트 바인딩
// 바인딩 성공 후 콜백함수 실행
app.listen(9000, () => {
  console.log("서버 실행 중");
});
