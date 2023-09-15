const datos = require("../db/data");
const indexController ={
    index: function(req, res){
        return res.render('index',{posteos: datos.posteos, usuarios: datos.usuarios})
    },
    registro: function(req, res){
        return res.render('registracion')
    },
    login: function(req, res){
        return res.render('login')
    },
    agregarPost: function(req, res){
        return res.render('agregarPost')
    },
    miPerfil: function(req, res){
        id_mi_usuario = 1;
        let posteos_usuario= [];
        for (let i = 0; i < datos.posteos.length; i++) {
            if (datos.posteos[i].id_usuario == id_mi_usuario) {
                posteos_usuario.push(datos.posteos[i]);
            }
        }
        return res.render('miPerfil', {usuario: datos.usuarios[0], posteos_usuario: posteos_usuario})
    },
    editarPerfil: function(req, res){
        return res.render('editarPerfil')
    }
}
module.exports = indexController;