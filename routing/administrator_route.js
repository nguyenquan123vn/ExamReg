const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const readExcel = require('read-excel-file/node');
const multer = require('multer');
const fs = require('fs');

const User = require('../model/userModel');

const admin_router = express.Router();
admin_router.use(cors());
const storage = multer.diskStorage({
    destination: (request, response, cb) => {
       cb(null, __dirname + '/upload/');
    },
    filename: (request, file, cb) => {
       cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname) ;
    }
})
const upload = multer({storage: storage});


admin_router.post('/register', upload.single("File"), (request, response) => {
    console.log('req.file:' , request.file);
    let filepath = __dirname + '/upload/' + request.file.filename;
    let today = Date.now();
    //read excel file
    readExcel(filepath).then((rows) => {
        //remove header row
        rows.shift();
        console.log(rows);
        
        let user_name = rows.map(rows => rows[0]);
        let password = rows.map(rows => rows[1]);
        let userData = {
            id: [user_name],
            username: [user_name],
            password: [password],
            isAdmin: 0,
            created: today
        }
        User.findOne({
            where: {
                username: [user_name]
            }
        }).then(user => {
            if(!user) {
                bcrypt.hash([password], 10, (err, hash) => {
                    userData.password = hash;
                    User.create(userData).then(user => {
                        response.json({status: 'Registered'})
                    })
                    .catch(err =>{
                        response.send('error:' + err);
                    })
                })
            }
        })
    });
    //delete upload file
    fs.unlinkSync(filepath);
})

module.exports = admin_router;
