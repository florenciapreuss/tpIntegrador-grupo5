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
    registro: function(req, res){ //FALTA CONTROL DE ACCESO
        return res.render('registracion')
    },
    login: function(req, res){ //FALTA CONTROL DE ACCESO
        return res.render('login')
    },
    miPerfil: function(req, res){ //FALTA CONTROL DE ACCESO Y VINCULAR AL USUARIO QUE SE LOGUEO CON ID_MI_USUARIO.
        datos.Posteo.findAll({
            include: [
                {association: "usuarios_id_posteo"},
                {association: "comentarios_id_posteo", include: {association:"usuarios_id_comentario"}}
            ]
        }).then((resultados) => {
            id_mi_usuario = 1;
            let posteos_usuario= [];
            for (let i = 0; i < resultados.length; i++) {
                if (resultados[i].id_usuario == id_mi_usuario) { 
                    posteos_usuario.push(resultados[i]);
                }
            }
            return res.render('miPerfil', {usuario:resultados[0], posteos_usuario: posteos_usuario})
          }).catch(function(error) {
            return res.send(error)
          });
    },
    editarPerfil: function(req, res){ //FALTA CONTROL DE ACCESO
        return res.render('editarPerfil')
    }
}
module.exports = indexController;