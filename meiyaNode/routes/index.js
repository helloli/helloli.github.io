var express = require('express');
var router = express.Router();
var picDao = require('../dao/picDao');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });a15b4afegw1f938pm4oo6j20ki03kmxr
  res.render('index');
  // res.render('index', { ad: 'a15b4afegw1f938pm4oo6j20ki03kmxr' });
});

router.route('/getNinePic').get(function(req, res, next) {
    // 检查用户
    picDao.getNinePic(req, res, next);

    // req.session.uid = req.body.username;
    // console.log(req.body.username);
    // console.log(req.session);
    // res.json(req.body);
    // res.send(200);
    // res.render('login', {username: req.body.username});
})

router.route('/getAdPic').get(function(req, res, next) {
    // 检查用户
    picDao.getAdPic(req, res, next);
})

module.exports = router;
