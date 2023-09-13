const express = require ('express')
const morgan = require('morgan')
const cors = require ('cors')
const { sequelize }  = require ('./database');

//middleware
const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.static('Public'))
app.set('view engine', 'ejs')

//Routes


app.set('view', __dirname + '/src/view')
app.use('/posts', require('./src/Routes/aciones.routes'))
app.use(require('./src/Routes/aciones.routes'))


//config sv
app.listen(4000, ()=>{
    
    sequelize.authenticate()

    console.log("Servidor arriba")
})
