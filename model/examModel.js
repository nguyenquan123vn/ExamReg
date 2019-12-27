const Sequelize = require('sequelize');
const db = require('./ORM');

const exam_session = require('./examSession');

const exam = db.sequelize.define('exam', {
    //attribute
    exam_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    exam_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    semester: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date_start: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    date_end: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
})
exam.hasMany(exam_session);
exam_session.belongsTo(exam);

module.exports = exam;