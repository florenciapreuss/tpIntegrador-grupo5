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
        for (let i = 0; i < datos.usuarios.length; i++) {
            if (datos.usuarios[i].email == req.query.busqueda) {
                usuarioEncontrado = datos.usuarios[i];
            }
        }
        return res.render('resultadoBusqueda', {usuario: usuarioEncontrado})
    }
}

module.exports = usersController;