const userController = {
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

module.exports = userController;