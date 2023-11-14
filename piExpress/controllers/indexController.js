const datos = require("../database/models");
const op = datos.Sequelize.Op;
const bcrypt = require('bcryptjs')
const indexController ={
    index: function (req, res, next) {
        datos.Posteo.findAll({
            include: [
                {association: "usuarios_id_posteo"},
                {association: "comentarios_id_posteo", include: {association:"usuarios_id_comentario"}}
            ]
        })
          .then((resultados) => {
            //return res.send(resultados)
            return res.render('index', { posteos: resultados });
          }).catch(function(error) {
            return res.send(error)
          });
    },
    registro: function(req, res){ //FALTA CONTROL DE ACCESO
        return res.render('registracion')
    },
    store: (req, res) => {
        let info = req.body; 
        let user = {
            nombre_usuario: info.nombreUsuario,
            email: info.email,
            constraseña: bcrypt.hashSync(info.password, 10),
            foto_perfil: info.fotoPerfil,
            fecha: info.date,
            dni: info.dni,
            remember_token: "false"
        };

        datos.Usuario.create(user)
        .then((result) => {
            return res.redirect("/login");
        }).catch((error) => {
            return console.log(error);
        });
    },
    login: function(req, res){ //FALTA CONTROL DE ACCESO
        return res.render('login')
    },
    loginPost: (req, res) => {
        let nombre_usuario = req.body.nombreUsuario;
        let pass = req.body.password;               // clave del formulario

        let criterio = {
            where: [{nombre_usuario: nombre_usuario}]
        };

        db.Usuario.findOne(criterio)
        .then((result) => {

            if (result != null) {
                let check = bcrypt.compareSync(pass, result.password)
                
                if (check) {
                    return res.redirect("/")
                } else {
                    return res.render("login")
                }

            } else {
                return res.send("No existe este usuario " + nombre_usuario)
            }
            
        }).catch((err) => {
            return console.log(err);
        });
    },
    miPerfil: function(req, res){ //FALTA CONTROL DE ACCESO Y VINCULAR AL USUARIO QUE SE LOGUEO CON ID_MI_USUARIO.
        datos.Posteo.findAll({
            include: [
                {association: "usuarios_id_posteo"},
                {association: "comentarios_id_posteo", include: {association:"usuarios_id_comentario"}}
            ]
        }).then((resultados) => {
            return res.render('miPerfil')
          }).catch(function(error) {
            return res.send(error)
          });
    },
    editarPerfil: function(req, res){ //FALTA CONTROL DE ACCESO
        return res.render('editarPerfil')
    }
}
module.exports = indexController;