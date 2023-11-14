var express = require('express');       /* Modularizamos el sistema de ruteo: dividir y organizar las rutas de la aplicacion */
var router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index); /* Definimos las rutas que responden a las solicitudes del usuario y las asocia con el controlador */

router.get('/registro', indexController.registro);
router.post('/registro', indexController.store);

router.get('/login', indexController.login);
router.post('/login', indexController.loginPost)

router.get('/miPerfil', indexController.miPerfil);

router.get ('/editarPerfil', indexController.editarPerfil);

module.exports = router;
