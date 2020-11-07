const { json, urlencoded } = require('express');
const morgan = require('morgan');

const loadMiddleware = app => {
  app.use(morgan('dev'));
  app.use(json());
  app.use(urlencoded({ extended: true }));
};

module.exports = loadMiddleware;
