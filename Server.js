const express = require ('express')
const morgan = require('morgan')
const cors = require ('cors')
const { sequelize }  = require ('./database');
const { postModel } = require('./src/Model/Post');
require('./src/Model/Post')

//middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(morgan('dev'))
app.use('/static', express.static('public'))
app.set('view engine', 'ejs')

//Routes


app.set('views', __dirname + '/src/views')
app.use('/actions', require('./src/routes/actions.routes'))
app.use('/gets', require('./src/routes/gets.routes'))
app.use(require('./src/routes/actions.routes'))


//config sv
app.listen(4000, ()=>{
    
    sequelize.sync({FORCE: false})
    // sequelize.authenticate()
    // .then(()=>(console.log('DB Conectada')))
    // .catch(err => console.log(err))

    console.log("Servidor arriba")
})
