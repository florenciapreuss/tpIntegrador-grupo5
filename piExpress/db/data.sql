CREATE SCHEMA tpIntegradorDB;
USE tpIntegradorDB;

CREATE TABLE usuarios(
id_usuario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(200) NOT NULL,
contraseña VARCHAR(200) NOT NULL,
foto_perfil VARCHAR(200)  NULL,
fecha DATE NULL,
dni INT UNIQUE NOT NULL,
created_at		TIMESTAMP 	  DEFAULT CURRENT_TIMESTAMP,
update_at		TIMESTAMP 	  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at		TIMESTAMP 	  NULL
);

CREATE TABLE posteos(
id_posteo INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre_imagen VARCHAR(500)  NULL,
pie_post VARCHAR(200)  NULL,
id_usuario INT UNSIGNED,
created_at		TIMESTAMP 	  DEFAULT CURRENT_TIMESTAMP,
update_at		TIMESTAMP 	  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at		TIMESTAMP 	  NULL,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE comentarios(
id_comentario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_posteo INT UNSIGNED,
id_usuario INT UNSIGNED,
texto_comentario VARCHAR(200)  NULL,
created_at		TIMESTAMP 	  DEFAULT CURRENT_TIMESTAMP,
update_at		TIMESTAMP 	  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at		TIMESTAMP 	  NULL,
FOREIGN KEY (id_posteo) REFERENCES posteos(id_posteo),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

INSERT INTO usuarios
VALUES (DEFAULT, "antocaste@hotmail.com", "contraseña", "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg", "2004-09-22", "46573891", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "pepito@hotmail.com", "galletita", "https://aishlatino.com/wp-content/uploads/2021/11/que-tipo-de-persona-te-gustaria-ser-730x411-SP.jpg", "2001-02-24", "40433891", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "juan@hotmail.com", "pepito", "https://i0.wp.com/sonria.com/wp-content/uploads/2016/08/2165947w620.jpg?fit=620%2C348&ssl=1", "1976-06-02", "18467891",DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "manuel@hotmail.com", "brianluis", "https://cdn.pixabay.com/photo/2022/06/17/20/39/person-7268693_1280.png", "1989-05-14", "33667855",DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "pepa@hotmail.com", "sanandres123", "https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg", "1997-12-31", "44657825",DEFAULT, DEFAULT, DEFAULT);

INSERT INTO posteos
VALUES(DEFAULT, "https://images.unsplash.com/photo-1600377140286-dc1208a7ccf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80", "En la playa", 2, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "https://www.etapainfantil.com/wp-content/uploads/2023/06/Frases-bonitas-amiga.jpg.webp", "Con mi amiga!", 4, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "https://images.ecestaticos.com/OxpI4-kDUl5UHLiOgkbsY16-YQs=/280x21:2273x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F25c%2Fb70%2F10c%2F25cb7010c5625534143a25911cecb1d5.jpg", "Esquiando!!!", 3, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "https://www.losandes.com.ar/resizer/qFPyFyUdXKr9wYjFAfXRIrWqFn4=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/CFCBTZGWQVFF7P533GU3O44TQE.jpg", "Vamos Bocaaa!!!", 1, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "https://s2.abcstatics.com/abc/www/multimedia/bienestar/2023/07/10/atardecer-verano-1-R6funi5jYXxtpImvVtH33OO-758x531@abc.jpg", "Que lindo atardecer", 5, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "https://e0.pxfuel.com/wallpapers/782/917/desktop-wallpaper-sceneries-background-cute-scenery.jpg", "En el paraiso", 2, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "https://images.ctfassets.net/o65uf8qogksw/2i29woClzi0HiPQr2wzXAq/f37b6c0d16d562f594e46cb43824bd2e/relacion-de-madre-e-hija-desktop.jpg", "Feliz cumple Ma!", 3, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqhVWuN7vUBy4ogWmjA8Mi_cxEdcBCBJ1p7XyYLYChKzdN--Q9eC_n0s3oQO2HAFJh_rI&usqp=CAU", "Viendo a la nada pensando en todo", 1, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "https://img.freepik.com/foto-gratis/mujer-concentrada-meditando-naturaleza_1098-1412.jpg?w=1480&t=st=1694001845~exp=1694002445~hmac=abbc67e2d48ce68c852efeb1458a8b754cdde1c7b656166a09325e11ec62f03d", "Desconecta para conectar", 4, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539065846169.jpg", "Falso veranito", 5, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios
VALUES(DEFAULT, 1, 2, "diosa!!!!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 1, 2, "Que linda!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 1, 2, "Alta playa amigaaa!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 1, 2, "Bombaaa!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 2, 4, "Te quiero mucho amigaaa", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 2, 4, "las quierooo", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 2, 4, "diosasss", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 2, 4, "bombonas", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 3, 3, "Ehhh alta crack", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 3, 3, "Que linda la vista!!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 3, 3, "bueena fachaaaaa", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 3, 3, "crack", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 4, 1, "Boquita wachoooo", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 4, 1, "Como amo a boca", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 4, 1, "VAMOS BOCAAAAAAAAAAA", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 4, 1, "VAMOS RIVER!!!!!!!!!!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 5, 5, "Divino", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 5, 5, "Que buenos colores!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 5, 5, "Que linda foto!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 5, 5, "buenisima", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 6, 2, "Muy linda", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 6, 2, "Que diosa", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 6, 2, "Que lindo todo", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 6, 2, "Donde estas?", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 7, 3, "Mandale un beso!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 7, 3, "Muy lindas!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 7, 3, "Feliz cumple!!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 7, 3, "que amorrr", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 8, 1, "Buenaaaa", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 8, 1, "facha", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 8, 1, "buena foto!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 8, 1, "que mal pie de post", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 9, 4, "Te extraño!!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 9, 4, "donde estas?", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 9, 4, "muy lindo!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 9, 4, "volve amigaaa", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 10, 5, "foton", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 10, 5, "Que linda playa!", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 10, 5, "DIOSAA", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 10, 5, "Bombonnnnn", DEFAULT, DEFAULT, DEFAULT);



