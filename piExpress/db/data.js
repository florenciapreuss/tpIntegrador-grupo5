const data = {
    usuarios: [
        {
            id_usuario: 1,
            email: "antocaste@hotmail.com",
            contraseña: "contraseña",
            foto_perfil: "../img/fotoPerfil-1.jpeg",
            fecha: "2004-09-22",
            dni: "46573891",
        },
        {
            id_usuario: 2,
            email: "pepito@hotmail.com",
            contraseña: "galletita",
            foto_perfil: "../img/fotoPerfil-2.jpeg",
            fecha: "2001-02-24",
            dni: "40433891",
        },
        {
            id_usuario: 3,
            email: "juan@hotmail.com",
            contraseña: "pepito",
            foto_perfil: "../img/fotoPerfil-3.jpeg",
            fecha: "1976-06-02",
            dni: "18467891",
        },
        {
            id_usuario: 4,
            email: "manuel@hotmail.com",
            contraseña: "brianluis",
            foto_perfil: "../img/fotoPerfil-4.jpeg",
            fecha: "1989-05-14",
            dni: "33667855",
        },
        {
            id_usuario: 5,
            email: "pepa@hotmail.com",
            contraseña: "sanandres123",
            foto_perfil: "../img/fotoPerfil-5.jpeg",
            fecha: "1997-12-31",
            dni: "44657825",
        }
    ],
    posteos: [
        {
            id_posteo: 1,
            nombre_imagen: "../img/posteo-1.jpeg",
            pie_post: "En la playa",
            id_usuario: 2,
            email_usuario: "pepito@hotmail.com",
            comentario: [
                {
                    id_usuario: 1,
                    email_usuario: "antocaste@hotmail.com",
                    texto_comentario: "diosa!!!!"
                },
                {
                    id_usuario: 2,
                    email_usuario: "pepito@hotmail.com",
                    texto_comentario: "Que linda!"
                },
                {
                    id_usuario: 3,
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "Alta playa amigaaa!"
                },
                {
                    id_usuario: 4,
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "Bombaaa!"
                }
            ]
        },
        {
            id_posteo: 2,
            nombre_imagen: "../img/posteo-2.jpeg",
            pie_post: "Con mi amiga!",
            id_usuario: 4,
            email_usuario: "manuel@hotmail.com",
            comentario: [
                {
                    id_usuario: 5,
                    email_usuario: "pepa@hotmail.com",
                    texto_comentario: "Te quiero mucho amigaaa"
                },
                {
                    id_usuario: 1,
                    email_usuario: "antocaste@hotmail.com",
                    texto_comentario: "las quierooo",
                },
                {
                    id_usuario: 2,
                    email_usuario: "pepito@hotmail.com",
                    texto_comentario: "diosasss",
                },
                {
                    id_usuario: 3,
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "bombonas",
                }
            ]
        },
        {
            id_posteo: 3,
            nombre_imagen: "../img/posteo-3.jpeg",
            pie_post: "Esquiando!!!",
            id_usuario: 3,
            email_usuario: "juan@hotmail.com",
            comentario: [
                {
                    id_usuario: 4,
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "Ehhh alta crack",
                },
                {
                    id_usuario: 5,
                    email_usuario: "pepa@hotmail.com",
                    texto_comentario: "Que linda la vista!!",
                },
                {
                    id_usuario: 1,
                    email_usuario: "antocaste@hotmail.com",
                    texto_comentario: "bueena fachaaaaa",
                },
                {
                    id_usuario: 2,
                    email_usuario: "pepito@hotmail.com",
                    texto_comentario: "crack",
                }
            ]
        },
        {
            id_posteo: 4,
            nombre_imagen: "../img/posteo-4.jpeg",
            pie_post: "Vamos Bocaaa!!!",
            id_usuario: 1,
            email_usuario: "antocaste@hotmail.com",
            comentario: [
                {
                    id_usuario: 3,
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "Boquita wachoooo",
                },
                {
                    id_usuario: 4,
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "Como amo a boca",
                },
                {
                    id_usuario: 5,
                    email_usuario: "pepa@hotmail.com",
                    texto_comentario: "VAMOS BOCAAAAAAAAAAA",
                },
                {
                    id_usuario: 1,
                    email_usuario: "antocaste@hotmail.com",
                    texto_comentario: "VAMOS RIVER!!!!!!!!!!",
                }
            ]
        },
        {
            id_posteo: 5,
            nombre_imagen: "../img/posteo-5.jpeg",
            pie_post: "Que lindo atardecer",
            id_usuario: 5,
            email_usuario: "pepa@hotmail.com",
            comentario: [
                {
                    id_usuario: 2,
                    email_usuario: "pepito@hotmail.com",
                    texto_comentario: "Divino",
                },
                {
                    id_usuario: 3,
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "Que buenos colores!",
                },
                {
                    id_usuario: 4,
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "Que linda foto!",
                },
                {
                    id_usuario: 5,
                    email_usuario: "pepa@hotmail.com",
                    texto_comentario: "buenisima",
                }
            ]
        },
        {
            id_posteo: 6,
            nombre_imagen: "../img/posteo-6.jpeg",
            pie_post: "En el paraiso",
            id_usuario: 2,
            email_usuario: "pepito@hotmail.com",
            comentario: [
                {
                    id_usuario: 1,
                    email_usuario: "antocaste@hotmail.com",
                    texto_comentario: "Muy linda",
                },
                {
                    id_usuario: 2,
                    email_usuario: "pepito@hotmail.com",
                    texto_comentario: "Que diosa",
                },
                {
                    id_usuario: 3,
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "Que lindo todo",
                },
                {
                    id_usuario: 4,
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "Donde estas?",
                }
            ]
        },
        {
            id_posteo: 7,
            nombre_imagen: "../img/posteo-7.jpeg",
            pie_post: "Feliz cumple Ma!",
            id_usuario: 3,
            email_usuario: "juan@hotmail.com",
            comentario: [
                {
                    id_usuario: 5,
                    email_usuario: "pepa@hotmail.com",
                    texto_comentario: "Mandale un beso!",
                },
                {
                    id_usuario: 1,
                    email_usuario: "antocaste@hotmail.com",
                    texto_comentario: "Muy lindas!",
                },
                {
                    id_usuario: 2,
                    email_usuario: "pepito@hotmail.com",
                    texto_comentario: "Feliz cumple!!",
                },
                {
                    id_usuario: 3,
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "que amorrr",
                }
            ]
        },
        {
            id_posteo: 8,
            nombre_imagen: "../img/posteo-8.jpeg",
            pie_post: "Viendo a la nada pensando en todo",
            id_usuario: 1,
            email_usuario: "antocaste@hotmail.com",
            comentario: [
                {
                    id_usuario: 4,
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "Buenaaaa",
                },
                {
                    id_usuario: 5,
                    email_usuario: "pepa@hotmail.com",
                    texto_comentario: "facha",
                },
                {
                    id_usuario: 1,
                    email_usuario: "antocaste@hotmail.com",
                    texto_comentario: "buena foto!",
                },
                {
                    id_usuario: 2,
                    email_usuario: "pepito@hotmail.com",
                    texto_comentario: "que mal pie de post",
                }
            ]
        },
        {
            id_posteo: 9,
            nombre_imagen: "../img/posteo-9.jpeg",
            id_usuario: 4,
            email_usuario: "manuel@hotmail.com",
            comentario: [
                {
                    id_usuario: 3,
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "Te extraño!!"
                },
                {
                    id_usuario: 4,
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "donde estas?",
                },
                {
                    id_usuario: 5,
                    email_usuario: "pepa@hotmail.com",
                    texto_comentario: "muy lindo!",
                },
                {
                    id_usuario: 1,
                    email_usuario: "antocaste@hotmail.com",
                    texto_comentario: "volve amigaaa",
                }
            ]
        },
        {
            id_posteo: 10,
            nombre_imagen: "../img/posteo-10.jpeg",
            pie_post: "Falso veranito",
            id_usuario: 5,
            email_usuario: "pepa@hotmail.com",
            comentario: [
                {
                    id_usuario: 2,
                    email_usuario: "pepito@hotmail.com",
                    texto_comentario: "foton",
                },
                {
                    id_usuario: 3,
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "Que linda playa!",
                },
                {
                    id_usuario: 4,
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "DIOSAA",
                },
                {
                    id_usuario: 5,
                    email_usuario: "pepa@hotmail.com",
                    texto_comentario: "Bombonnnnn",
                }
            ]
        }

    ]
}
module.exports = data