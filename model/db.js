const mysql = require('mysql');

const config = {
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'slowpoke',
    database: 'ExamReg'
};

const pool = mysql.createPool(config);

module.exports = pool;

