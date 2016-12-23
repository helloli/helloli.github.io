var express = require('express');
var router = express.Router();
var picDao = require('../dao/picDao');
var $util = require('../util/util');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.route('/getNinePic').get(function(req, res, next) {
    picDao.getNinePic(req, res, next, function (data) {
        $util.jsonWrite(res, data);
    });
})

router.route('/getAdPic').get(function(req, res, next) {
    picDao.getAdPic(req, res, next, function (data) {
        $util.jsonWrite(res, data[0]);
    });
})

router.route('/getPetPic').get(function(req, res, next) {
    picDao.getPetPic(req, res, next, function (data) {
        $util.jsonWrite(res, data);
    });
})

router.route('/getWildPic').get(function(req, res, next) {
    picDao.getWildPic(req, res, next, function (data) {
        $util.jsonWrite(res, data);
    });
})

module.exports = router;
