const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const readExcel = require('read-excel-file/node');
const jwt = require('jsonwebtoken');
const fs = require('fs'); 

//upload file middleware/utilities
const upload = require('./utils/upload');

//models
const User = require('../model/userModel');
const eligible = require('../model/studentModel');
const subject = require('../model/subjectModel');

const admin_router = express.Router();
admin_router.use(cors());

//register with excel
admin_router.post('/register', upload.single("File"), (request, response) => {
    console.log('req.file:' , request.file);
    let filepath = __dirname + '/upload/' + request.file.filename;
    let today = Date.now();
    let count = 0;

    //read excel file
    readExcel(filepath).then((rows) => {
        //remove header row
        rows.shift();
        
        let user_name = rows.map(rows => rows[0]);
        let password = rows.map(rows => rows[1]);
        
        for(let i = 0; i < user_name.length; i++){
            let userData = {
                id: user_name[i],
                username: user_name[i],
                password: password[i],
                isAdmin: 0,
                created: today
            }
            //find data query
            User.findOne({
                where: {
                    username: user_name[i],
                }
            }).then(user => {
                if(!user) {
                    //hashing password
                    bcrypt.hash(password[i], 10, (err, hash) => {
                        userData.password = hash;
                        User.create(userData).then(user => {
                            console.log("success");
                            ++count;
                            return;
                        })
                        .catch(err =>{
                            console.log('error:' + err);
                        })
                    })
                } else {
                    console.log({ error: 'User already exists' });
                }
            })
            .catch(err => {
                response.send('error: ' + err)
            })
        }
    });
    //delete uploaded file
    fs.unlinkSync(filepath);
    response.send('file upload success, added ' + count + ' account(s)');
});

//upload file of eligible or not eligible student
admin_router.post('/eligible', upload.single("File"), (request, response) => {
    console.log('req.file:' , request.file);
    let filepath = __dirname + '/upload/' + request.file.filename;
    let today = Date.now();
    let eligible = request.body.eligible;
    //read excel file
    readExcel(filepath).then((rows) => {
        let class_id = rows[0][0];
        //remove first 2 rows of the excel file
        rows.slice(0,2);

        let stud_id = rows.map(rows => rows[0]);
        let stud_name = rows.map(rows => rows[1]);

        for(let i = 0; i < stud_id.length; i++){
            let studentData = {
                stud_id: stud_id[i],
                stud_name: stud_name[i],
                class_id: class_id[i],
                eligible: eligible,
                created: today
            }
            eligible.findOne({
                where: {
                    stud_id: stud_id[i],
                    stud_name: stud_name[i],
                    class_id: class_id[i],
                    eligible: eligible
                }
            }).then(eli => {
                if(!eli)
                {
                    eligible.create(studentData)
                }
            })
        }
    });
    response.send('file upload success');
    //delete uploaded file
    fs.unlinkSync(filepath);
});

admin_router.post('/addSubject', (request, response) => {
    let subject_info = {
        subject_id: request.body.subject_id,
        subject_name: request.body.subject_name,
        credit_numbers: request.body.credit_numbers
    };
    subject.findOne({
        where: {
            subject_id: request.body.subject_id
        }
    }).then (sub => {
        if(!sub){
            subject.create(subject_info).then( () => {
                response.json({status: 'added subject'});
            })
            .catch( (err) => {
                console.log(err);
                response.send('something is wrong');
            })
        }
        else
        {
            response.send("subject existed");
        }
    })
})


module.exports = admin_router;