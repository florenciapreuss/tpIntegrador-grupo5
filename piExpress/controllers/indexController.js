const datos = require("../db/data");
const indexController ={
    index: function(req, res){          /* Método que posee una función anónima que tiene como parámetros req y res */
        return res.render('index',{posteos: datos.posteos, usuarios: datos.usuarios}) /* A través de res. render renderizamos el view index y le pasmos la información de posteos y usuarios*/
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
    miPerfil: function(req, res){       /* Quremos mostrar el perfil específico de un usuario */
        id_mi_usuario = 1;          /* Creamos la variaable id mi usuario y le damos el valor 1 */
        let posteos_usuario= [];        /* Creamos un array vacío para qeu se almacenen los posteos de este usuario */
        for (let i = 0; i < datos.posteos.length; i++) {
            if (datos.posteos[i].id_usuario == id_mi_usuario) { /* Recorre los id de los usuarios en la base de datos y cuando uno coincide con el de la iteración se pushean esos posteos en el array */
                posteos_usuario.push(datos.posteos[i]);
            }
        }
        return res.render('miPerfil', {usuario: datos.usuarios[0], posteos_usuario: posteos_usuario}) /*  renderizamos la vista mi perfil con el objeto de datos que contiene la información ylos posteos de ese usuario */
    },
    editarPerfil: function(req, res){
        return res.render('editarPerfil')
    }
}
module.exports = indexController;