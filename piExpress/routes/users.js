var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/detallePost/:id', usersController.detallePost)

router.get('/detalleUsuario/:id', usersController.detalleUsuario)

router.get('/resultadoBusqueda', usersController.resultadoBusqueda)

module.exports = router;
