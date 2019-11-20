const pool = require('./db');

var User = function(user){
    this.id = user.id;
    this.password = user.password;
}

User.login = function(id, password, res){
    let sql = 'SELECT * FROM `account_list` WHERE `id` =' + id + ' AND `_password` = ' + password;
    pool.query(sql, (error, result) => {
        if (error) throw error; 
        console.log(result);
        res.status(200).json({
            res:result
        })
    })
};

module.exports = User;