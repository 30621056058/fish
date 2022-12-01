var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// import url from 'url';
// var url = require('url')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var subjectRouter = require('./routes/subject');
// var cookieParser = require('cookie-parser');



var app = express();
app.use(cookieParser("aaa"))
// var cors = require('cors');
// app.use(cors());
const cors = require('cors');  
app.use(cors({  
    origin:['*'],
    methods:['GET','POST'],
    // alloweHeaders:['Conten-Type', 'Authorization']
}));
app.use(cookieParser());
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(moment)

// const path = require('path')
// app.use(express.static(path.join(__dirname, 'public')));
const formidable = require('formidable');

  

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/subject', subjectRouter);
const url = require('url');
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  

});
app.all('*', function(req, res, next) {
 
  //   res.header("Access-Control-Allow-Origin", "http://182.61.46.145");.
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By",' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8",);
    // res.header("Content-Type", "*",);
    res.header("Access-Control-Allow-Credentials", true)
  
    if (req.method == "OPTIONS") {
      next();
    }
    else {
      next();
    }
    // res.header("Content-Type", "multipart/form-data; boundary=----WebKitFormBoundaryphMsBDfQLgf3TdBf",);
    // next();
  });

module.exports = app;
