const Sequelize = require('sequelize');
const db = require('./ORM');

module.exports = db.sequelize.define('exam_session', {
    //attribute
    room_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    subject_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    exam_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    exam_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    start_hour: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
})