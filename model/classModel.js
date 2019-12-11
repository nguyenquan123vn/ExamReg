const Sequelize = require('sequelize');
const db = require('./ORM');

module.exports = db.sequelize.define('class_subject', {
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