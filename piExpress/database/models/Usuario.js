module.exports = function(sequelize, dataTypes) {
    let alias = "Usuario";  
    
    let cols = {  
        id_usuario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        
        },
        nombre_usuario: {
            type: dataTypes.STRING(200)
            
        },
        email: {
            type: dataTypes.STRING(200)
        },
       
        contraseña: {
            type: dataTypes.STRING(200)
        },
        foto_perfil: {
            type: dataTypes.STRING(200)
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
            
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
    
        deleted_at: {
            type: dataTypes.DATE
        },
    
    }
    
    let config = {  
        tableName : "usuarios",
        timestamps: true,
        underscored: true,
    }
    
    
    const Usuario =  sequelize.define(alias,cols,config);
    
    /*RELACIONES */
    Usuario.associate = function(models){
    /*contra parte de la relación con los posteos */
        Usuario.hasMany(models.Posteo,{
            as: "posteos_id_usuario",
            foreignKey: "id_usuario"
        })
    /*contraparte de la relacion con los comentarios */
        Usuario.hasMany(models.Comentario,{
            as: "comentarios_id_usuario",
            foreignKey: "id_usuario"
        })
    }
    
    return  Usuario;
    }