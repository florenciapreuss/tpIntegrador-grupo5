var express = require('express');/* Importamos el modulo nativo express para modularizar el sistema de ruteo */
var router = express.Router(); /* Nos permite definir las rutas y manejar las solicitudes a través de los métodos que nos brinda */
const usersController = require('../controllers/usersController')

router.get('/detallePost/:id', usersController.detallePost)     

router.get('/detalleUsuario/:id', usersController.detalleUsuario)

router.get('/resultadoBusqueda', usersController.resultadoBusqueda)

module.exports = router;
