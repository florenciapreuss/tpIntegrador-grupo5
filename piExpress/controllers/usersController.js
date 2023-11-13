const datos = require("../database/models");
let usuario = datos.Usuario;
const usersController = { 
    detalleUsuario: function (req, res, next) {
    let id_usuario = req.params.id
    let relaciones = {
      include: [
        {association: "posteos_id_usuario"} 
      ]
    }
    usuario.findByPk(id_usuario, relaciones)
    .then(function(resultados)  {
      // return res.send(resultadosDetalleU)
      return res.render('detalleUsuario', { data: resultados});
   })
   .catch(function(error)  {
       res.send(error)
})
  },
  resultadoBusqueda: function(req, res){
    return res.render('resultadoBusqueda', {usuarios: datos.usuarios})  /* Como no sabemos capturar la información de la url que llega a traves de un form mostramos todos los usuarios */
} 
}

module.exports = usersController;

/* Usamos .render() para renderizar la vista en el navegador */

