const express = require('express');
const morgan = require('morgan');
const app = express();

// load application middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// load router
app.use('/auth', require('./routes/auth.router'));
app.use('/users', require('./routes/users.router'));
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'Not Found' });
});

// error handling
app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: err.message });
});

app.listen(9000, err => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  } else console.log('server start');
});
