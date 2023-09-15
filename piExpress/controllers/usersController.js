const datos = require("../db/data");
const usersController = {
    detallePost: function(req, res){
        let id_posteo = req.params.id;
        let posteo ="";
        for (let i = 0; i < datos.posteos.length; i++) {
            if (id_posteo == datos.posteos[i].id_posteo) {
                posteo = datos.posteos[i];
            }
        }
        let usuario_posteo ="";
        for (let j = 0; j < datos.usuarios.length; j++) {
            if (posteo.id_usuario == datos.usuarios[j].id_usuario) {
                usuario_posteo = datos.usuarios[j]
           }
            
        }
        return res.render('detallePost', {posteo: posteo, usuario_posteo: usuario_posteo, usuarios: datos.usuarios})
    },
    detalleUsuario: function(req, res){
        let id_usuario = req.params.id;
        let usuario = "";
        for (let i = 0; i < datos.usuarios.length; i++) {
            if (id_usuario == datos.usuarios[i].id_usuario) {
                usuario = datos.usuarios[i];
            }
        }
        let posteos_usuario = [];
        for (let j = 0; j < datos.posteos.length; j++) {
            if (id_usuario == datos.posteos[j].id_usuario) {
                posteos_usuario.push(datos.posteos[j])
            }
        }
        return res.render('detalleUsuario', {usuario: usuario, posteos_usuario: posteos_usuario})
    },
    resultadoBusqueda: function(req, res){
        return res.render('resultadoBusqueda', {usuarios: datos.usuarios})
    }
}

module.exports = usersController;