const express = require('express');
const loaders = require('./loaders');

const server = () => {
  const app = express();
  app.set('PORT', process.env.NODE_ENV || 9000);

  loaders(app);

  app.listen(app.get('PORT'), err => {
    if (err) {
      console.error(err.message);
      process.exit();
    } else console.log('서버 실행중');
  });
};

server();
