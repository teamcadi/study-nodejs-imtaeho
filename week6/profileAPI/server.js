const express = require('express');
const morgan = require('morgan');
const app = express(); // Express -> Backend Application

// express static
app.use('/uploads', express.static('uploads'));

// application middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('common'));

// load routers
app.use('/users', require('./routes/user.router'));
app.use('/images', require('./routes/image.router'));
app.use('/admin', require('./routes/admin.router'));

// port binding
app.listen(9000, ()=>{
    console.log('server start');
})
