const datos = require("../database/models");
const op = datos.Sequelize.Op;
const bcrypt = require('bcryptjs');
let hubo_error = false;
const indexController ={
    index: function (req, res, next) {
        let criterio = {
            order: [['createdAt', 'DESC']], 
            include: {
              all: true,
              nested: true
            }
          }
        datos.Posteo.findAll(criterio)
          .then((resultados) => {
            return res.render('index', { posteos: resultados });
          }).catch(function(error) {
            return res.send(error)
          });
    },
    registro: function(req, res){
        hubo_error = false;
        return res.render('registracion', {error: hubo_error})
    },
    store: (req, res) => {
        let info = req.body; 
        let criterio = {
            where: [{email: info.email}]
        };
        datos.Usuario.findOne(criterio)
        .then((result)=> {
            if (info.password.length >= 3 && result == null) {
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
                    hubo_error = false;
                    return res.redirect("/login", {error:hubo_error});
                }).catch((error) => {
                    return console.log(error);
                });
            } else{
                hubo_error = true;
                return res.render('registracion', {error: hubo_error})
            }
        })
        
    },
    login: function(req, res){
        if(req.session.user != undefined){
            return res.redirect('/')
        }else{
            return res.render('login', {error: hubo_error})
        }
    },
    loginPost: (req, res) => {
        let email = req.body.email;
        let pass = req.body.password;
        let rememberme = req.body.rememberme

        let criterio = {
            where: [{email: email}]
        };
        console.log(req.body);
        datos.Usuario.findOne(criterio)
        .then((result) => {
            if (result != null) {
                let check = bcrypt.compareSync(pass, result.contrasenia);
                if (check) {
                    req.session.user = result.dataValues;
                    if (rememberme!=undefined) {
                        res.cookie('id_usuario', result.id_usuario, {maxAge: 1000 * 60 * 5})
                    }
                    return res.redirect("/")
                } else {
                    hubo_error = true;
                    return res.render("login", {error: hubo_error})
                }

            } else {
                hubo_error = true;
                return res.render("login", {error: hubo_error})
            }
            
        }).catch((err) => {
            return console.log(err);
        });
    },
    miPerfil: function(req, res){ 
        if (req.session.user != undefined) {
            let id = req.params.id;
            let criterio = {
                order: [['createdAt', 'DESC']], 
                include: {
                  all: true,
                  nested: true
                }
              }
            
            datos.Usuario.findByPk(id, criterio)
            .then(function(result){
                return res.render('miPerfil', {usuario: result});
            })
            .catch(function (error) {
                return res.send(error)
            }) 
        }else{
            hubo_error = false;
            res.redirect('/login', {error: hubo_error});
            }
        
    },
    editarPerfil: function(req, res){ 
        if (req.session.user!=undefined) {
            return res.render('editarPerfil')
        }else {
            hubo_error = false;
            return res.redirect("/login", {error: hubo_error})
        }
    },
    logout: function (req, res) {
        req.session.user = undefined;
        res.locals.user = undefined;
        res.clearCookie('id_usuario');
        return res.render('login', {error: hubo_error})
      },
}
module.exports = indexController;