module.exports = function(sequelize, dataTypes) {
    let alias = "Comentario";  
    
    let cols = {  
        id_comentario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        
        },
        texto_comentario: {
            type: dataTypes.STRING(200)
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
        tableName : "comentarios",
        timestamps: true,
        underscored: true,
    }
    
    
    const Comentario =  sequelize.define(alias,cols,config);
   
    
      /*RELACIONES */
      Comentario.associate = function(models){
        /*contraparte de la relacion posteo con los comentarios */
        Comentario.belongsTo(models.Posteo, {
            as: "posteos_id_comentario",
            foreignKey: "id_posteo",
        })
        /*relacionamos usuarios con comentarios */
        Comentario.belongsTo(models.Usuario, {
            as: "usuarios_id_comentario",
            foreignKey: "id_usuario",
        })
        
    
    }
    return  Comentario;
}
    
    
    