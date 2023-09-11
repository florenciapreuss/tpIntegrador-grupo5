const data = {
    usuarios: [
        {
            id_usuario: 1,
            email: "antocaste@hotmail.com",
            contraseña: "contraseña",
            foto_perfil: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg",
            fecha: "2004-09-22",
            dni: "46573891",
        },
        {
            id_usuario: 2,
            email: "pepito@hotmail.com",
            contraseña: "galletita",
            foto_perfil: "https://aishlatino.com/wp-content/uploads/2021/11/que-tipo-de-persona-te-gustaria-ser-730x411-SP.jpg",
            fecha: "2001-02-24",
            dni: "40433891",
        },
        {
            id_usuario: 3,
            email: "juan@hotmail.com",
            contraseña: "pepito",
            foto_perfil: "https://i0.wp.com/sonria.com/wp-content/uploads/2016/08/2165947w620.jpg?fit=620%2C348&ssl=1",
            fecha: "1976-06-02",
            dni: "18467891",
        },
        {
            id_usuario: 4,
            email: "manuel@hotmail.com",
            contraseña: "brianluis",
            foto_perfil: "https://cdn.pixabay.com/photo/2022/06/17/20/39/person-7268693_1280.png",
            fecha: "1989-05-14",
            dni: "33667855",
        },
        {
            id_usuario: 5,
            email: "pepa@hotmail.com",
            contraseña: "sanandres123",
            foto_perfil: "https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg",
            fecha: "1997-12-31",
            dni: "44657825",
        }
    ],
    posteos: [
        {
            id_posteo: 1,
            nombre_imagen: "https://images.unsplash.com/photo-1600377140286-dc1208a7ccf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80",
            pie_post: "En la playa",
            id_usuario: 2,
            comentario:[
                {
                    email_usuario:  "antocaste@hotmail.com",
                    texto_comentario: "diosa!!!!"
                },
                {
                    email_usuario:  "pepito@hotmail.com",
                    texto_comentario: "Que linda!"
                },
                {
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "Alta playa amigaaa!"
                },
                {
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "Bombaaa!"
                }
            ]
        },
        {
            id_posteo: 2,
            nombre_imagen: "https://www.etapainfantil.com/wp-content/uploads/2023/06/Frases-bonitas-amiga.jpg.webp",
            pie_post: "Con mi amiga!",
            id_usuario: 4,
            comentario: [
                {
                    email_usuario:  "pepa@hotmail.com",
                    texto_comentario: "Te quiero mucho amigaaa"
                },
                {
                    email_usuario:  "antocaste@hotmail.com",
                    texto_comentario: "las quierooo",
                },
                {
                    email_usuario:  "pepito@hotmail.com",
                    texto_comentario: "diosasss",
                },
                {
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "bombonas",
                }
            ]
        },
        {
            id_posteo: 3,
            nombre_imagen: "https://images.ecestaticos.com/OxpI4-kDUl5UHLiOgkbsY16-YQs=/280x21:2273x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F25c%2Fb70%2F10c%2F25cb7010c5625534143a25911cecb1d5.jpg",
            pie_post: "Esquiando!!!",
            id_usuario: 3,
            comentario: [
                {
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "Ehhh alta crack",
                },
                {
                    email_usuario:  "pepa@hotmail.com",
                    texto_comentario: "Que linda la vista!!",
                },
                {
                    email_usuario:  "antocaste@hotmail.com",
                    texto_comentario: "bueena fachaaaaa",
                },
                {
                    email_usuario:  "pepito@hotmail.com",
                    texto_comentario: "crack",
                }
            ]
        },
        {
            id_posteo: 4,
            nombre_imagen: "https://www.losandes.com.ar/resizer/qFPyFyUdXKr9wYjFAfXRIrWqFn4=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/CFCBTZGWQVFF7P533GU3O44TQE.jpg",
            pie_post: "Vamos Bocaaa!!!",
            id_usuario: 1,
            comentario: [
                {
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "Boquita wachoooo",
                },
                {
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "Como amo a boca",
                },
                {
                    email_usuario:  "pepa@hotmail.com",
                    texto_comentario: "VAMOS BOCAAAAAAAAAAA",
                },
                {
                    email_usuario:  "antocaste@hotmail.com",
                    texto_comentario: "VAMOS RIVER!!!!!!!!!!",
                }
            ]
        },
        {
            id_posteo: 5,
            nombre_imagen: "https://s2.abcstatics.com/abc/www/multimedia/bienestar/2023/07/10/atardecer-verano-1-R6funi5jYXxtpImvVtH33OO-758x531@abc.jpg",
            pie_post: "Que lindo atardecer",
            id_usuario: 5,
            comentario: [
                {
                    email_usuario:  "pepito@hotmail.com",
                    texto_comentario: "Divino",
                },
                {
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "Que buenos colores!",
                },
                {
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "Que linda foto!",
                },
                {
                    email_usuario:  "pepa@hotmail.com",
                    texto_comentario: "buenisima",
                }
            ]
        },
        {
            id_posteo: 6,
            nombre_imagen: "https://e0.pxfuel.com/wallpapers/782/917/desktop-wallpaper-sceneries-background-cute-scenery.jpg",
            pie_post: "En el paraiso",
            id_usuario: 2,
            comentario:[
                {
                    email_usuario:  "antocaste@hotmail.com",
                    texto_comentario: "Muy linda",
                },
                {
                    email_usuario:  "pepito@hotmail.com",
                    texto_comentario: "Que diosa",
                },
                {
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "Que lindo todo",
                },
                {
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "Donde estas?",
                }
            ]
        },
        {
            id_posteo: 7,
            nombre_imagen: "https://images.ctfassets.net/o65uf8qogksw/2i29woClzi0HiPQr2wzXAq/f37b6c0d16d562f594e46cb43824bd2e/relacion-de-madre-e-hija-desktop.jpg",
            pie_post: "Feliz cumple Ma!",
            id_usuario: 3,
            comentario:[
                {
                    email_usuario:  "pepa@hotmail.com",
                    texto_comentario: "Mandale un beso!",
                },
                {
                    email_usuario:  "antocaste@hotmail.com",
                    texto_comentario: "Muy lindas!",
                },
                {
                    email_usuario:  "pepito@hotmail.com",
                    texto_comentario:"Feliz cumple!!",
                },
                {
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "que amorrr",
                }
            ]
        },
        {
            id_posteo: 8,
            nombre_imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqhVWuN7vUBy4ogWmjA8Mi_cxEdcBCBJ1p7XyYLYChKzdN--Q9eC_n0s3oQO2HAFJh_rI&usqp=CAU",
            pie_post: "Viendo a la nada pensando en todo",
            id_usuario: 1,
            comentario:[
                {
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "Buenaaaa",
                },
                {
                    email_usuario:  "pepa@hotmail.com",
                    texto_comentario: "facha",
                },
                {
                    email_usuario:  "antocaste@hotmail.com",
                    texto_comentario: "buena foto!",
                },
                {
                    email_usuario:  "pepito@hotmail.com",
                    texto_comentario: "que mal pie de post",
                }
            ]
        },
        {
            id_posteo: 9,
            nombre_imagen: "https://img.freepik.com/foto-gratis/mujer-concentrada-meditando-naturaleza_1098-1412.jpg?w=1480&t=st=1694001845~exp=1694002445~hmac=abbc67e2d48ce68c852efeb1458a8b754cdde1c7b656166a09325e11ec62f03d",
            pie_post: "Desconecta para conectar",
            id_usuario: 4,
            comentario:[
                {
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "Te extraño!!"
                },
                {
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "donde estas?",
                },
                {
                    email_usuario:  "pepa@hotmail.com",
                    texto_comentario: "muy lindo!",
                },
                {
                    email_usuario:  "antocaste@hotmail.com",
                    texto_comentario: "volve amigaaa",
                }
            ]
        },
        {
            id_posteo: 10,
            nombre_imagen: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539065846169.jpg",
            pie_post: "Falso veranito",
            id_usuario: 5,
            comentario:[
                {
                    email_usuario:  "pepito@hotmail.com",
                    texto_comentario: "foton",
                },
                {
                    email_usuario: "juan@hotmail.com",
                    texto_comentario: "Que linda playa!",
                },
                {
                    email_usuario: "manuel@hotmail.com",
                    texto_comentario: "DIOSAA",
                },
                {
                    email_usuario:  "pepa@hotmail.com",
                    texto_comentario: "Bombonnnnn",
                }
            ]
        }

    ]
}