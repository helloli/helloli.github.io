var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });a15b4afegw1f938pm4oo6j20ki03kmxr
  res.render('index');
  // res.render('index', { ad: 'a15b4afegw1f938pm4oo6j20ki03kmxr' });
});

module.exports = router;
