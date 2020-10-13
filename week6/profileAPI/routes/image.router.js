const { images } = require('../database/image.db');
const { getUserByEmail } = require('../database/user.db');
const { upload } = require('../utils/multer.util');
// const { upload } = require('../utils/multer.util');
const router = require('express').Router();

/**
 * @description 이미지 등록
 * @route POST /images
 * @request @body {email}
 */
router.post('/', upload.single('img') ,(req,res)=>{
    const {email} = req.body;
    console.log('email? : ', email);
    const id = images[images.length-1].id + 1; // auto increment(AI)
    const path = req.file.destination + '/' + req.file.filename;
    // 어떠한 인증 체계를 통해서 유저를 알 수 있는 데이터를 받았다고 가정(req.body.email)
    const userId = getUserByEmail(email).id;
    images.push({id, path, userId})
    res.status(201).json({success: true, message:'업로드 성공'})
})

module.exports = router