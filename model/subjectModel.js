const Sequelize = require('sequelize');
const db = require('./ORM');

module.exports = db.sequelize.define('subject', {
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