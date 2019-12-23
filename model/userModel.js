const Sequelize = require('sequelize');
const db = require('./ORM');

module.exports = db.sequelize.define('accountList', {
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

/*const pool = require('./db');
const session = require('express-session');
const mysql_sess = require('express-mysql-session')(session);
const bycrypt = require('bcrypt'); */

/*function user_login(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    let sql = 'SELECT * FROM `account_list` WHERE `user_name` = ?';
    pool.query(sql, [username], (err, result) => {
        if(err) throw err;
        console.log(result);
        if(result[0].password == password)
        {
            request.session.login = true;
            request.session.username = username;
            response.status(200).json({
                result : result
            })
        }
    })
}*/



