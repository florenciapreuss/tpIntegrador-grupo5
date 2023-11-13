const datos = require("../database/models");
let posteo = datos.Posteo;
const productsController = {
agregarPost: function(req, res){ //FALTA HACER QUE SE ENVIEN ESTOS DATOS A LA BASE DE DATOS
    return res.render('agregarPost')
  },
detallePost: function(req, res, next){ 
    let id_posteo = req.params.id; 
    let relaciones = {
      include: [
        {association: "usuarios_id_posteo"},
        {association: "comentarios_id_posteo", include: [{association:"usuarios_id_comentario"}]}
    ]
    }
    posteo.findByPK(id_posteo, relaciones)
      .then((resultados) => {
        return res.render('detallePost', {posteo: resultados}) 
      }).catch(function(error) {
        return res.send(error)
      });
    ;
  }
}
module.exports = productsController;