# Express.js 기초

---

[Express - Node.js web application framework](https://expressjs.com/)

- Node.js 진영에서 가장 많이 사용하는 프레임워크

  ![Express%20Framework%201%20ae358f47d00343109b78e8b9cad22193/trends.png](Express%20Framework%201%20ae358f47d00343109b78e8b9cad22193/trends.png)

- 많은 라이브러리와 예제
- 5.0 릴리즈 소식

  [Express 5로의 마이그레이션](https://expressjs.com/ko/guide/migrating-5.html)

# NPM

---

[npm](https://www.npmjs.com/)

**Node Package Manager**

- Node.js의 기본 패키지 관리자
- `yarn`도 존재함
- `npm cli`를 통해서 외부 라이브러리를 설치할 수 있습니다.

# Express로 백앤드 앱 만들기

---

```bash
npm -v 6.14.x
npm init -y
```

```bash
npm install express
// install -> i
// npm i express
```

- app.js 생성

  ```javascript
  const express = require('express');
  const app = express();

  app.get('/', (req, res, next) => {
    res.send('<h1>Hello Express</h1>');
  });

  app.listen(9000, () => {
    console.log('Server Start');
  });
  ```

- queryString, parameter

  ```javascript
  app.get('/:a/:b', (req, res) => {
    const queryString = req.query;
    const parameter = req.params;
    const hostname = req.hostname;
    const headers = req.headers;

    console.log(queryString);
    console.log(parameter);
    console.log(hostname);
    console.log(headers);
    res.end();
  });
  ```

- 실행 (bash shell)

  ```bash
  npm i && node app.js
  ```
