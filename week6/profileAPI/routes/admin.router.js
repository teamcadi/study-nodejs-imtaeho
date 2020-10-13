const { images } = require('../database/image.db');
const { users } = require('../database/user.db');
const router = require('express').Router();

// 라우터 레벨 미들웨어
router.use((req,res,next)=>{
    console.log('라우터 미들웨어 들렸다감');
    next();
})

// 관리자가 모든 유저들을 조회
router.get('/users', (req,res)=>{
    res.status(200).json(users);
})

// 관리자가 서버에 있는 이미지들을 조회
router.get('/images', (req,res)=>{
    res.status(200).json(images);
})

module.exports = router;