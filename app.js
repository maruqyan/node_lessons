const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejsMate = require('ejs-mate');
const { static:{ viewsDir, staticDir }, server:{ logLevel } } = require('./config');

const indexRouter = require('./routes/index');
const recipeRouter = require('./routes/recipe');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

const app = express();

// view engine setup
app.engine('ejs',ejsMate);
app.set('views', path.join(__dirname, viewsDir));
app.set('view engine', 'ejs');

app.use(logger(logLevel));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, staticDir)));

app.use('/', indexRouter);
app.use('/recepies', recipeRouter);
app.use('/register', registerRouter);
app.use('/login',loginRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  return next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  return res.render('error');
});

module.exports = app;
