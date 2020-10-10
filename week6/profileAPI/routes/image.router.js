const { images } = require('../database/image.db');
const { upload } = require('../utils/multer.util');
const router = require('express').Router();

/**
 * @description 이미지 등록
 * @route POST /images
 * @temp "test2@test2"
 */
router.post('/', upload.single('profile-image'),(req,res)=>{
    const userEmail = "test2@test2";
    const id = images[images.length-1].id + 1
    images.push({id, })

})

module.exports = router