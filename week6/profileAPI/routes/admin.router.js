const { images } = require('../database/image.db');
const { users } = require('../database/user.db');

const router = require('express').Router();

router.get('/users', (req,res)=>{
    res.status(200).json(users);
})

router.get('/images', (req,res)=>{
    res.status(200).json(images);
})

module.exports = router;