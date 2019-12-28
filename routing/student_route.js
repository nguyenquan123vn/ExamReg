const express = require('express');
const cors = require('cors');

const sequelize = require('../model/ORM');
const class_subject = require('../model/classModel');
const student = require('../model/studentModel');
const exam = require('../model/examModel');

const student_router = express.Router();
const operator = sequelize.OP;
student_router.use(cors());

student_router.get('/class', (request, response) => {
    class_subject.findAll({
        include: [{
            model: student,
            where: {stud_id: request.body.stud_id},
            require: true
        }]
    }).then (class1 => {
        console.log(class1);
        response.send(class1);
    });
});

student_router.get('/exam', (request, response) => {
    let date = new Date();
    //let now = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    //let date_now = new Date(now);
    //console.log(date_now);
    exam.findAll({
        where: {
            date_start: {
                $gte : date
            },
            date_end: {
                $lte: date
            }
        }                        
    }).then(ex => {
        response.send(ex);
    });
})

module.exports = student_router;