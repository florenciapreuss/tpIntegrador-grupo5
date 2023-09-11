var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);

router.get('/registro', indexController.registro);

router.get('/login', indexController.login);

router.get('/agregarPost', indexController.agregarPost);

router.get('/miPerfil', indexController.miPerfil);

router.get ('/editarPerfil', indexController.editarPerfil);

module.exports = router;
