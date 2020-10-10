const multer = require('multer');

const uploadOptions = {
    storage,
    limits
}


const upload = multer(uploadOptions);

module.exports = {
    upload
}