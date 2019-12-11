const Sequelize = require('sequelize');
const db = require('./ORM');

module.exports = db.sequelize.define('studentInfo', {
    //attribute
    stud_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    stud_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    class_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    eligible: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }, 
    created: {
        type: Sequelize.DATE
    },
    modified: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false,
    freezeTableName: true
})