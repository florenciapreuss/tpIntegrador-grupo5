var express = require('express');/* Importamos el modulo nativo express para modularizar el sistema de ruteo */
var router = express.Router(); /* Nos permite definir las rutas y manejar las solicitudes a través de los métodos que nos brinda */
const productsController = require('../controllers/productsController');

router.get('/detallePost/:id', productsController.detallePost);  

router.get('/agregarPost', productsController.agregarPost);
router.post('/agregarPost', productsController.storePost);

router.get('/borrarPost/:id', productsController.borrarPost);

router.get('/editarPost/:id', productsController.editarPost);
router.post('/updatePost/:id', productsController.updatePost);

router.post('/agregarComentario/:id', productsController.agregarComentario);

module.exports = router;
