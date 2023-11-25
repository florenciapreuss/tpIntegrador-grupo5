const datos = require("../database/models");
let usuario = datos.Usuario;
const op = datos.Sequelize.Op;
const usersController = { 
    detalleUsuario: function (req, res, next) {
    let id_usuario = req.params.id
    let criterio = {
      order: [['createdAt', 'DESC']], 
      include: {
        all: true,
        nested: true
      }
    }
    usuario.findByPk(id_usuario, criterio)
    .then(function(resultados)  {
      return res.render('detalleUsuario', { data: resultados});
   })
   .catch(function(error)  {
       res.send(error)
})
  },
  resultadoBusqueda: function(req, res){
    let busqueda = req.query.busqueda;
      let filtro = {
      limit: 10,
      order: [['createdAt', 'DESC']],
      where: [
        { pie_post: { [op.like]: `%${busqueda}%` } }
      ],
      include: {
        all: true,
        nested: true
      }
    }
    datos.Posteo.findAll(filtro)
      .then(function (results) {
        return res.render("resultadoBusqueda", { posts: results, busqueda: busqueda})
      })
      .catch(function (error) {
        res.send(error)
      })
} 
}

module.exports = usersController;



