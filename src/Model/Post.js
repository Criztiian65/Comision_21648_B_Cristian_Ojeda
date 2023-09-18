const {sequelize} = require ('../../database')
const {DataTypes} = require ('sequelize')

const postModel = sequelize.define('posteos', {
  
    titulo_del_post: DataTypes.STRING,
    contenido: DataTypes.TEXT,
    url: DataTypes.TEXT,
  
  })

module.exports = {postModel}

