module.exports = function(sequelize, dataTypes) {
    let alias = "Posteo";  
    
    let cols = {  
        id_posteo: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        
        },
        nombre_imagen: {
            type: dataTypes.STRING(200)
        },
    
        pie_post: {
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
        tableName : "posteos",
        timestamps: true,
        underscored: true,
    }
    
    
    const Posteo =  sequelize.define(alias,cols,config);
    
    /*RELACIONES */
    Posteo.associate = function(models){
        /*relacionamos posteo con el usuario */
        Posteo.belongsTo(models.Usuario,{
            as: "usuarios_id_posteo",
            foreignKey: "id_posteo"
        })
        /*relacionamos posteo con los comentarios */
        Posteo.hasMany(models.Comentario, {
            as: "comentarios_id_posteo",
            foreignKey: "id_posteo",
        })
    }


    return  Posteo;
}
    
    