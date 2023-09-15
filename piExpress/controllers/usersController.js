const datos = require("../db/data");
const usersController = {
    detallePost: function(req, res){
        return res.render('detallePost')
    },
    detalleUsuario: function(req, res){
        return res.render('detalleUsuario')
    },
    resultadoBusqueda: function(req, res){
        let usuarioEncontrado;
        return res.render('resultadoBusqueda', {usuarios: datos.usuarios})
    }
}

module.exports = usersController;