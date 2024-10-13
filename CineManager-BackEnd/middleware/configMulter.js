
import multer from 'multer';
import path from 'path';

// Set up the multer storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage }).fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }]);

export default upload;