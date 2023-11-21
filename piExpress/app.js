var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require('express-session');
const datos = require('./database/models')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

const db = require('./database/models')

var app = express(); /* Me permite usar las diversas funciones y métodos que vienen con express */

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* config de session */
app.use(session({secret:"MyApp",resave:false,saveUninitialized:true}));

app.use(function (req,res,next) {
  if (req.session.user != undefined) {
    res.locals.user=req.session.user;
    return next();
  }
  return next();
})
/**Configuracion de cookie */
app.use(function (req,res,next) {
  /**Si existe la cookie del usuario y no existe el usuario en session*/
  if (req.cookies.id_usuario != undefined && req.session.user== undefined) {
    let idUsuarioCookie=req.cookies.id_usuario;
    datos.Usuario.findByPk(idUsuarioCookie)
    .then((user)=>{
      /*Cargamos el usuario encontrado en la session*/
      req.session.user=user.dataValues;
      /**cargar el usuario en locals */
      res.locals.user=user.dataValues;
      return next();
    })
    .catch((err)=>console.log(err))
  }else{
    return next();
  }
})

app.use('/', indexRouter); /* Me permite configurar mis sitemas de ruteo */
app.use('/users', usersRouter);
app.use('/products', productsRouter);

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

module.exports = app;
