var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController')

/* GET users listing. */
router.get('/usuario:', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/detallePost/:id', userController.detallePost)

router.get('/detalleUsuario/:id', userController.detalleUsuario)

router.get('/resultadoBusqueda/:usuario', userController.resultadoBusqueda)

module.exports = router;
