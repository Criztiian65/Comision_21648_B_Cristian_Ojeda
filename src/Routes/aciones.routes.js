const { Router } = require ('express')
const router = Router()

const {
    crearPost,
    modificarPost,
    eliminarPost,
    listaDePost,
    unicoPost

} =require('../controllers/controllers')


router.get('/', listaDePost)
router.get('/:id', unicoPost)
router.post('/', crearPost)
router.delete('/:id', eliminarPost)
router.put('/:id', modificarPost)


module.exports = router