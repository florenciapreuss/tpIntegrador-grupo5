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
nombre_imagen VARCHAR(200)  NULL,
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

