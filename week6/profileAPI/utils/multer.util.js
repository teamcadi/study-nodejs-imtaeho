const multer = require('multer');

const uploadOptions = {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/users');
        },
        filename: (req, file, cb) => {
            const {email} = req.body;
            if (!email) cb(Error("email 없음"))
            else {
                const fName = file.originalname;
                const arr = fName.split('.');
                const ext = arr[arr.length-1];
                cb(null, `${email}.${ext}`)
            }
        }
    }),
    limits: {fileSize: 20 * 1024 * 1024}
}


const upload = multer(uploadOptions);

module.exports = {
    upload
}