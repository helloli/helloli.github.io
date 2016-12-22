var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');
var $util = require('../util/util');

/* GET login listing. */
router.get('/', function(req, res, next) {
    if (req.session.uid) {
        res.redirect('/admin');
    } else {
        res.render('login');
    }
});

router.route('/login').post(function(req, res, next) {
    // 检查用户
    userDao.checkPassword(req, res, next, function (data) {
        console.log(data, 'data');
        if (data.length > 0) {
            $util.jsonWrite(res, {
                uid: data[0].uid,
                username: data[0].username
            });
            req.session.uid = req.body.username;
        } else {
            $util.jsonWrite(res, [], '用户名或密码错啦！');
        }
    });

    // req.session.uid = req.body.username;
    // console.log(req.body.username);
    // console.log(req.session);
    // res.json(req.body);
    // res.send(200);
    // res.render('login', {username: req.body.username});
})

module.exports = router;
