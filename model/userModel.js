const Sequelize = require('sequelize');
const db = require('./ORM');

const user = db.sequelize.define('accountList', {
    //attribute
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    },
    created: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
})

module.exports = user;
