const datos = require("../db/data");
const indexController ={
    index: function(req, res){
        return res.render('index',{posteos: datos.posteos})
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
        return res.render('miPerfil')
    }
}
module.exports = indexController;