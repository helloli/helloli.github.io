var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.set({
        'Cache-Control': 'max-age=30'
    });
    res.render('index', { title: 'Express' });
});

module.exports = router;
