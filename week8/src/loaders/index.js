const loadErrorHandling = require('./errorHandling.loader');
const loadMiddleware = require('./middleware.loader');
const loadRouter = require('./router.loader');

const loaders = app => {
  loadMiddleware(app);
  loadRouter(app);
  loadErrorHandling(app);
};

module.exports = loaders;
