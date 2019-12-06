/*const mysql = require('mysql');

const config = {
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'slowpoke',
    database: 'ExamReg'
};

const pool = mysql.createPool(config);

pool.getConnection((err, connection) => {
    if (err) {
        console.log(err.code);
    }
    console.log('Connected!')

    if (connection) {
      connection.release()
      return
    }
})
module.exports = pool; */


const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize('ExamReg', 'root', 'slowpoke', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
