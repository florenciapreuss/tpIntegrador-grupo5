const datos = require("../database/models");
const op = datos.Sequelize.Op;
const indexController ={
    index: function (req, res, next) {
        datos.Posteo.findAll({
            include: [
                {association: "usuarios_id_posteo"},
                {association: "comentarios_id_posteo", include: {association:"usuarios_id_comentario"}}
            ]
        })
          .then((resultados) => {
            for (let index = 0; index < resultados.length; index++) {
                for (let j = 0; j < resultados[index].comentarios_id_posteo.length; j++) {
                    console.log(resultados[index].comentarios_id_posteo[j].id_usuario);
                    
                }
                
            }
           // return res.send(resultados)
            return res.render('index', { posteos: resultados });
          }).catch(function(error) {
            return res.send(error)
          });
    },
    registro: function(req, res){
        return res.render('registracion')
    },
    login: function(req, res){
        return res.render('login')
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