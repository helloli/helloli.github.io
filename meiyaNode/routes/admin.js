var express = require('express');
var router = express.Router();
var $util = require('../util/util');

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
        $util.jsonWrite(res, [], '还没有登录呢，我宣布登出无效！');
    }
})

module.exports = router;
