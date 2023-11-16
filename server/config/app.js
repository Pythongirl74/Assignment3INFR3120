let createError = require('http-errors'); // npm package that provides a function to create errors
let express = require('express'); // npm package that provides a framework for building web sites
let path = require('path'); // npm package that provides utilities for working with file and directory paths
let cookieParser = require('cookie-parser'); // npm package that provides cookie parsing functionality
let logger = require('morgan'); // npm package that provides logging functionality
var router = express.Router(); // npm package that provides routing functionality

let app = express(); // create an instance of the express application

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// DB setup

let mongoose = require('mongoose');
let mongoDB = mongoose.connection;
let DB = require('./db');
//mongoose.connect('mongodb://127.0.0.1:27017/BookLib');
mongoose.connect(DB.URI);
mongoDB.on('error',console.error.bind(console,'Connection Error'));
mongoDB.once('open',()=>{console.log("Mongo DB is connected")});
//mongoose.connect(DB.URI);
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let AssignmentsRouter = require('../routes/assignments');


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/assignments', AssignmentsRouter);


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
  res.render('error',{title:'Error'});
});

module.exports = app;
