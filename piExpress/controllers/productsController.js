const datos = require("../database/models");
let posteo = datos.Posteo;
let hubo_error = false;
const productsController = {
agregarPost: function(req, res){
  if (req.session.user!=undefined) {
    return res.render('agregarPost')
}else {
    return res.redirect("/login", {error: hubo_error})
}
  },
storePost: function(req, res){
  let info = req.body;
  info.id_usuario = req.session.user.id_usuario;
  datos.Posteo.create(info)
    .then(function (result) {
      return res.redirect('/')
    })
    .catch(function (error) {
      res.send(error)
    })
        
},
borrarPost: function (req, res) {
  let id = Number(req.params.id);
  let criterio = {
    where: [{ id_posteo: id }]
  }
  datos.Posteo.destroy(criterio)
    .then(function (result) {
      return res.redirect('/')
    })
    .catch(function (error) {
      res.send(error)
    })
},
editarPost: function (req, res) {
  let id = Number(req.params.id);
    datos.Posteo.findByPk(id)
      .then(function (result) {
        res.render("editarPost", {post: result })
      })
      .catch(function (error) {
        res.send(error)
      })
},
updatePost: function (req, res) {
  let id = Number(req.params.id);
  let info = req.body;
  let criterio = {
    where: [{
      id_posteo: id
    }]
  }
  datos.Posteo.update(info, criterio)
    .then(function (result) {
      return res.redirect("/products/detallePost/" + id)
    })
    .catch(function (error) {
      res.send(error)
    })
},
agregarComentario: function (req, res) {
},
detallePost: function(req, res, next){ 
    let id_posteo = req.params.id; 
    let relaciones = {
      include: [
        {association: "usuarios_id_posteo"},
        {association: "comentarios_id_posteo", include: [{association:"usuarios_id_comentario"}]}
    ]
    }
    posteo.findByPk(id_posteo, relaciones)
      .then((resultados) => {
        return res.render('detallePost', {posteo: resultados}) 
      }).catch(function(error) {
        return res.send(error)
      })
  }
}
module.exports = productsController;