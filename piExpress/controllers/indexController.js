const indexController ={
    index: function(req, res){
        return res.render('index')
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