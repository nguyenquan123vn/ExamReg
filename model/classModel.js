const Sequelize = require('sequelize');
const db = require('./ORM');

const student = require('./studentModel');

const class_subject = db.sequelize.define('class_subject', {
    //attribute
    class_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    subject_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name_of_lecturer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    semester: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
})

class_subject.hasMany(student, {foreignKey: 'class_id'});
student.belongsTo(class_subject, {foreignKey: 'class_id'});

module.exports = class_subject;