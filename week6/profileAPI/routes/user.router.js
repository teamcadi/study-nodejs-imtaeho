const { getImage } = require('../database/image.db');
const { getUser } = require('../database/user.db');
const router = require('express').Router();

/**
 * @description 유저 프로필 조회
 * @route GET /users/:userId
 */
router.get('/:userId', (req,res)=>{
    const {userId} = req.params
    const user = getUser(Number(userId));
    delete user.password;

    const image = getImage(user.id);
    const imageUrl = `http://localhost:9000/${image.path}`;
    res.status(200).json({success: true, profile: {user, imageUrl}});
})

module.exports = router;