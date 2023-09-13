const {sequelize} = require ('../../database')
const {DataTypes} = require ('sequelize')

const postModel = sequelize.define('Posteos', {
    TituloDelPost: DataTypes.STRING ,
    Contenido: DataTypes.TEXT,
    //imagen: ,
    Fecha: DataTypes.DATE
})

module.exports = {postModel};
