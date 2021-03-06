// dao/picDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./picSqlMapping');

// 使用连接池，提升性能
var pool  = mysql.createPool($util.cloneObj($conf.mysql));

module.exports = {

    // 获取九图表情
    getNinePic: function (req, res, next, callback) {
        pool.getConnection(function(err, connection) {
            // 如果connection不存在说明数据库连接出错，则直接返回错误结果
            if (!connection) {
                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res);
            } else {
                var param = req.query;
                connection.query($sql.getNinePic, [param.time, 0, $conf.ninePic.limit], function(err, result) {
                    // 执行回调
                    callback(result);

                    // 释放连接 
                    connection.release();
                })
            }
        })
    },

    // 获取野表情
    getWildPic: function (req, res, next, callback) {
        pool.getConnection(function(err, connection) {
            if (!connection) {
                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res);
            } else {
                var param = req.query;
                connection.query($sql.getWildPic, [param.time, $conf.wildPic.limit], function(err, result) {
                    // 执行回调
                    callback(result);

                    // 释放连接 
                    connection.release();
                })
            }
        })
    },

    // 获取萌宠搞笑表情
    getPetPic: function (req, res, next, callback) {
        pool.getConnection(function(err, connection) {
            if (!connection) {
                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res);
            } else {
                var param = req.query;
                connection.query($sql.getPetPic, [param.time, $conf.petPic.limit], function(err, result) {
                    // 执行回调
                    callback(result);

                    // 释放连接 
                    connection.release();
                })
            }
        })
    },
    getAdPic: function (req, res, next, callback) {
        pool.getConnection(function(err, connection) {
            if (!connection) {
                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res);
            } else {
                var param = req.query;
                connection.query($sql.getAdPic, [param.type], function(err, result) {
                    // 执行回调
                    callback(result);

                    // 释放连接 
                    connection.release();
                })
            }
        })
    },
    insertNinePic: function (req, res, next, callback) {
        pool.getConnection(function(err, connection) {
            if (!connection) {
                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res);
            } else {
                // 获取前台页面传过来的参数
                // var param = req.query || req.params;
                var param = req.body;

                // 建立连接，向表中插入值
                //     insertNinePic: 'insert into ninepic(pids, visible, addTime, author, authorLink, description, favs, avatar, original) values(?, ?, ?, ?, ?, ?, ?, ?, ?)',
                connection.query($sql.insertNinePic, [param.pids, 1, param.author, param.authorLink, param.description, 0, param.avatar, param.original], function(err, result) {
                    // 执行回调
                    callback(result);

                    // 释放连接 
                    connection.release();
                });
            }
        });
    },
    // checkPassword: function (req, res, next) {
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
    //             connection.query($sql.checkPassword, [param.username, param.password], function(err, result) {
    //                 if (result.length) {
    //                     result = {
    //                         code: 200,
    //                         msg: 'success',
    //                         data: {
    //                             uid: result[0].uid,
    //                             username: result[0].username,
    //                             // authority: result[0].authority
    //                         }
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
    //         if (!connection) {
    //             // 以json形式，把操作结果返回给前台页面
    //             $util.jsonWrite(res);
    //         } else {
    //             connection.query($sql.queryByUsername, username, function(err, result) {
    //                 $util.jsonWrite(res, result);
    //                 connection.release();

    //             });
    //         }
    //     });
    // },
    // queryAll: function (req, res, next) {
    //     pool.getConnection(function(err, connection) {
    //         if (!connection) {
    //             // 以json形式，把操作结果返回给前台页面
    //             $util.jsonWrite(res);
    //         } else {
    //             connection.query($sql.queryAll, function(err, result) {
    //                 $util.jsonWrite(res, result);
    //                 connection.release();
    //             });
    //         }
    //     });
    // }
};