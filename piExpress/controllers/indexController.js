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
    },
    detallePost: function(req, res){
        return res.render('detallePost')
    },
    detalleUsuario: function(req, res){
        return res.render('detalleUsuario')
    },
    resultadoBusqueda: function(req, res){
        return res.render('resultadoBusqueda')
    }

}
module.exports = indexController;