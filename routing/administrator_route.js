const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
    //read excel file
    readExcel(filepath).then((rows) => {
        rows.shift();
        console.log(rows);
        
        for(let i = 0; i < rows.size; ++i){
            let userData = {
                id: rows[i][0],
                username: rows[i][0],
                password: rows[i][1],
                isAdmin: 0,
                created: today
            }
            User.findOne({
                where: {
                    username: rows[i][0]
                }
            }).then(user => {
                if(!user) {
                    bcrypt.hash(request.body.password, 10, (err, hash) => {
                        userData.password = hash;
                        User.create(userData).then(user => {
                            response.json({status: 'Registered'})
                        })
                        .catch(err =>{
                            response.send('error:' + err);
                        })
                    })
                }
                else 
                {
                    response.json({error: 'User existed'})
                }
            })
        }
    });
    fs.unlinkSync(filepath);
    //response.json({'msg': 'file upload ' + request.file.filename});
})

module.exports = admin_router;
