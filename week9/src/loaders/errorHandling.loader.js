const loadErrorHandling = app => {
  app.use((err, req, res, next) => {
    res.status(500).json({ success: false, message: err.message });
  });
};

module.exports = loadErrorHandling;
