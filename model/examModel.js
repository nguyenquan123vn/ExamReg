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
    isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    }
}, {
    timestamps: false,
    freezeTableName: true
})