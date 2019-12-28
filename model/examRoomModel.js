const Sequelize = require('sequelize');
const db = require('./ORM');

const ex_session = require('./examSession');

const ex_room = db.sequelize.define('exam_room', {
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
});
ex_room.hasOne(ex_session);
ex_session.belongsTo(ex_room);

module.exports = ex_room;