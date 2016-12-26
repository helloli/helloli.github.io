var express = require('express');
var router = express.Router();
var $util = require('../util/util');
var userDao = require('../dao/userDao');
var picDao = require('../dao/picDao');

/* GET admin listing. */
router.get('/', function(req, res, next) {
    if (req.session.uid) {
        res.render('admin', {user: req.session.uid});
    } else {
        res.redirect('/login');
    }
});

router.route('/logout').get(function(req, res, next) {
    if (req.session.uid) {
        req.session.uid = null;
        $util.jsonWrite(res, null);
    } else {
        $util.jsonWrite(res, [], '还没有登录呢，不用登出哟！');
    }
});;

router.route('/addNicePic').get(function(req, res, next) {
    if (req.session.uid) {
        userDao.checkAuth(req, res, next, function (data) {
            if (data[0].authority == 1) {
                
            } else {
                $util.jsonWrite(res, [], '对不起，你没有操作权限呢！');
            }
        })
    } else {
        $util.jsonWrite(res, [], '你好像没有登录哦，重新登录试试？');
    }
});

module.exports = router;
