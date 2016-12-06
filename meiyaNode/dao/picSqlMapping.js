// dao/picSqlMapping.js
// CRUD SQL语句
// 九图的每次获取十条数据，需要传最后一条数据的id
// 单图的每次获取十天的数据
var pic = {
    // 获取九图
    getNinePic: 'select * from ninepic where unix_timestamp(addTime)*1000 < ? order by addTime desc limit ?,?',
    // 获取广告地址
    getAdPic: 'select * from ads order by addTime desc limit 1',
    // 获取野表情
    // getWildPic: 'select * from wildpic '

    insert: 'INSERT INTO user(username, password) VALUES(?, ?)',
    update: 'update user set username=?, password=? where id=?',
    delete: 'delete from user where username=?',
    queryByUsername: 'select * from user where username=?',
    queryAll: 'select * from user',
    checkPassword: 'select * from user where username=? and password=?'
};

module.exports = pic;