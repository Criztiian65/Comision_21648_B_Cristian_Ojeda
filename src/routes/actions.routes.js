const { Router } = require ('express')
const router = Router()

const {
    crearPost,
    modificarPost,
    eliminarPost

} =require('../controllers/controllers')



router.post('/new-post', crearPost)
router.get('/borrar/:id', eliminarPost)
router.post('/modificar/:id', modificarPost)


module.exports = router