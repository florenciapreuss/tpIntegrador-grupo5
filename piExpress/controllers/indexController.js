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
            contrasenia: bcrypt.hashSync(info.password, 12),
            foto_perfil: info.fotoPerfil,
            fecha: info.date,
            dni: info.dni,

        };

        datos.Usuario.create(user)
        .then((result) => {
            return res.redirect("/login");
        }).catch((error) => {
            return console.log(error);
        });
    },
    login: function(req, res){
        return res.render('login')
    },
    loginPost: (req, res) => {
        let nombreUsuario = req.body.nombreUsuario;
        let pass = req.body.password;

        let criterio = {
            where: [{nombre_usuario: nombreUsuario}]
        };

        datos.Usuario.findOne(criterio)
        .then((result) => {

            if (result != null) {
                let check = bcrypt.compareSync(pass, result.contrasenia);
                
                if (check) {
                    return res.redirect("/")
                } else {
                    return res.render("login")
                }

            } else {
                return res.send("No existe este usuario " + nombreUsuario)
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