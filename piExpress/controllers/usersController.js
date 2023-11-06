const datos = require("../database/models");
const usersController = { /* Creamos el objeto literal */
    detalleUsuario: function(req, res){ /* Cuando el usuario presiona el mail de un posteo */
        let id_usuario = req.params.id; /* Capturamos el id de la url con la propiedad .params */
        let usuario = "";
        for (let i = 0; i < datos.usuarios.length; i++) { /* Creamos un for que recorra los usuarios */
            if (id_usuario == datos.usuarios[i].id_usuario) { /* si el id de la iteracion (capturado de la url) coincide con el id usuario de la base de datos,  */
                usuario = datos.usuarios[i];    /* añadimos la información de ese usuariom en la variable vacia */
            }
        }
        let posteos_usuario = []; /* Creamos un array vacío para que se almacenen los posteos del usuario */
        for (let j = 0; j < datos.posteos.length; j++) { /* Recorre los posteos en db */
            if (id_usuario == datos.posteos[j].id_usuario) { /* si el id de la iteracion coincide con el id del usuario de db  */
                posteos_usuario.push(datos.posteos[j]) /* Pusheamos los posteos de ese usuario en el array vacio */
            }
        }
        return res.render('detalleUsuario', {usuario: usuario, posteos_usuario: posteos_usuario}) /* Lo que está entre {} es un objeto de datos que contiene la informacion del usuario y sus posteos */
    },
    resultadoBusqueda: function(req, res){
        return res.render('resultadoBusqueda', {usuarios: datos.usuarios})  /* Como no sabemos capturar la información de la url que llega a traves de un form mostramos todos los usuarios */
    }
}

module.exports = usersController;

/* Usamos .render() para renderizar la vista en el navegador */

