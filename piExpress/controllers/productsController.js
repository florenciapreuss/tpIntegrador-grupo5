const datos = require("../database/models");
const productsController = {
agregarPost: function(req, res){
    return res.render('agregarPost')
},
detallePost: function(req, res){ /* Método con función anonima que tiene req y res como parametros */
        let id_posteo = req.params.id; /* Con la propiedad.params traemos el id de la url del posteo que tocó el usuario */
        let posteo ="";
        for (let i = 0; i < datos.posteos.length; i++) { /* Encontrar el posteo que coincide con el id */
            if (id_posteo == datos.posteos[i].id_posteo) {
                posteo = datos.posteos[i]; /* añade el posteo que coincide con el id del posteo  */
            }
        }
        let usuario_posteo ="";
        for (let j = 0; j < datos.usuarios.length; j++) { /* Para tener la foto de perfil */
            if (posteo.id_usuario == datos.usuarios[j].id_usuario) { /* si el id de esta renderizacion coincide con un id en posteo, mostrar la foto de perfil de ese usuario */
                usuario_posteo = datos.usuarios[j]
           }
            
        }
        return res.render('detallePost', {posteo: posteo, usuario_posteo: usuario_posteo, usuarios: datos.usuarios}) /* Renderizamos la vista detallepost con el objeto de datos que tiene la información del posteo y del usuario que hizo el posteo */
    },
}
module.exports = productsController;