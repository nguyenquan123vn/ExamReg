const Sequelize = require('sequelize');
const db = require('./ORM');

module.exports = db.sequelize.define('exam_room', {
    //attribute
    room_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    room_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    registered_computer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    empty_computer: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false,
    freezeTableName: true
})