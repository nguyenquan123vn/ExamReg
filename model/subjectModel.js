const Sequelize = require('sequelize');
const db = require('./ORM');

const class_subject = require('./classModel');

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

subject.hasMany(class_subject);

module.exports = subject;