var express = require('express');
var router = express.Router();

/* GET login listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});

router.route('/login').post(function(req, res, next) {
    console.log(req.body);
    // res.json(req);
    // res.send(200);
})

module.exports = router;
