var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// session中间件
var session = require('express-session');

var routes = require('./routes/index');
var admin = require('./routes/admin');
var login = require('./routes/login');
var users = require('./routes/users');

var app = express();

// 全局错误处理，使得进程在出错的时候也不会挂掉
// process.on('uncaughtException', function (err) {
//     console.log('Caught exception: ', err);
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session配置
app.use(['/admin', '/login'], session({
  secret: 'leesirbupt',
  resave: false,
  saveUninitialized: true
}))

app.use('/', routes);
// app.use('/admin', admin);
app.use('/users', users);
app.use('/admin', admin);
// app.get('/admin', function (req, res, next) {
//   if (req.session.uid) {
//     // res.render('admin', {user: req.session.uid});
//     app.use('/admin', admin);
//   } else {
//     res.redirect('/login');
//   }
// });
// app.get('/login', function (req, res, next) {
//   if (req.session.uid) {
//     res.redirect('admin');
//   } else {
// // app.use('/login', login);
//     res.render('login');
//   }
// })
app.use('/login', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
