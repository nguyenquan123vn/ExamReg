const Sequelize = require('sequelize');
const db = require('./ORM');

module.exports = db.sequelize.define('exam', {
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