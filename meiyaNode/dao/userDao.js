// dao/userDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./userSqlMapping');

// 使用连接池，提升性能
var pool  = mysql.createPool($util.cloneObj($conf.mysql));

module.exports = {
    checkPassword: function (req, res, next, callback) {
        pool.getConnection(function(err, connection) {
            if (!connection) {
                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res);
            } else {
                // 获取前台页面传过来的参数
                // var param = req.query || req.params;
                var param = req.body;

                // 建立连接，执行查询
                connection.query($sql.checkPassword, [param.username, param.password], function(err, result) {
                    // 执行回调
                    callback(result);
                    // 释放连接 
                    connection.release();
                });
            }
        });
    },
    // add: function (req, res, next) {
    //     pool.getConnection(function(err, connection) {
    //         if (!connection) {
    //             // 以json形式，把操作结果返回给前台页面
    //             $util.jsonWrite(res);
    //         } else {
    //             // 获取前台页面传过来的参数
    //             // var param = req.query || req.params;
    //             var param = req.body;

    //             // 建立连接，向表中插入值
    //             // 'INSERT INTO user(username, password) VALUES(?, ?)',
    //             connection.query($sql.insert, [param.username, param.password], function(err, result) {
    //                 if(result) {
    //                     result = {
    //                         code: 200,
    //                         msg:'增加成功'
    //                     };
    //                 }

    //                 // 以json形式，把操作结果返回给前台页面
    //                 $util.jsonWrite(res, result);

    //                 // 释放连接 
    //                 connection.release();
    //             });
    //         }
    //     });
    // },
    // delete: function (req, res, next) {
    //     // delete by Id
    //     pool.getConnection(function(err, connection) {
    //         var username = +req.body.username;
    //         connection.query($sql.delete, username, function(err, result) {
    //             if(result.affectedRows > 0) {
    //                 result = {
    //                     code: 200,
    //                     msg:'删除成功'
    //                 };
    //             } else {
    //                 result = void 0;
    //             }
    //             $util.jsonWrite(res, result);
    //             connection.release();
    //         });
    //     });
    // },
    // update: function (req, res, next) {
    //     // update by id
    //     // 为了简单，要求同时传name和age两个参数
    //     var param = req.body;
    //     if (param.username == null || param.password == null) {
    //         $util.jsonWrite(res, undefined);
    //         return;
    //     }

    //     pool.getConnection(function(err, connection) {
    //         connection.query($sql.update, [param.name, param.age, +param.id], function(err, result) {
    //             // 使用页面进行跳转提示
    //             if (result.affectedRows > 0) {
    //                 res.render('suc', {
    //                     result: result
    //                 }); // 第二个参数可以直接在jade中使用
    //             } else {
    //                 res.render('fail',  {
    //                     result: result
    //                 });
    //             }

    //             connection.release();
    //         });
    //     });

    // },
    // queryByUsername: function (req, res, next) {
    //     var username = +req.query.username; // 为了拼凑正确的sql语句，这里要转下整数
    //     pool.getConnection(function(err, connection) {
    //         connection.query($sql.queryByUsername, username, function(err, result) {
    //             $util.jsonWrite(res, result);
    //             connection.release();

    //         });
    //     });
    // },
    // queryAll: function (req, res, next) {
    //     pool.getConnection(function(err, connection) {
    //         connection.query($sql.queryAll, function(err, result) {
    //             $util.jsonWrite(res, result);
    //             connection.release();
    //         });
    //     });
    // }
};