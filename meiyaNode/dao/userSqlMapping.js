// dao/userSqlMapping.js
// CRUD SQL语句
var user = {
    insert: 'INSERT INTO user(username, password) VALUES(?, ?)',
    update: 'update user set username=?, password=? where id=?',
    delete: 'delete from user where username=?',
    queryByUsername: 'select * from user where username=?',
    queryAll: 'select * from user',
    checkPassword: 'select * from user where username=? and password=?'
};

module.exports = user;