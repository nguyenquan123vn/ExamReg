const Sequelize = require('sequelize');
const db = require('./ORM');

const class_subject = require('./classModel');
const exam_session = require('./examSession')

//define table
const subject = db.sequelize.define('subject', {
    //attribute
    subject_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    subject_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    credit_numbers: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
})

//table relationship
subject.hasMany(class_subject, {foreignKey: 'subject_id'});
class_subject.belongsTo(subject, {foreignKey: 'subject_id'});

subject.hasMany(exam_session, {foreignKey: 'subject_id'});
exam_session.belongsTo, {foreignKey: 'subject_id'};

module.exports = subject;