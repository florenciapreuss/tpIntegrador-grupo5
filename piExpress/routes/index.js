var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/registro', function(req, res, next) {
  res.render('registracion');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/agregarPost', function(req, res, next) {
  res.render('agregarPost');
});
router.get('/perfil', function(req, res, next) {
  res.render('miPerfil');
});

module.exports = router;
