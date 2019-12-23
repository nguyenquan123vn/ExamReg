const multer = require('multer');
const fs = require('fs');

//upload file middleware
const storage = multer.diskStorage({
    destination: (request, response, cb) => {
       cb(null, __dirname + process.env.UPLOAD_DIR);
    },
    filename: (request, file, cb) => {
       cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname) ;
    }
})
const upload = multer({storage: storage});

module.exports = upload;