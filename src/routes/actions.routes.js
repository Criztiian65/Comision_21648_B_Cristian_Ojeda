const { Router } = require ('express')
const router = Router()

const {
    crearPost,
    modificarPost,
    eliminarPost

} =require('../controllers/controllers')



router.post('/new-post', crearPost)
router.delete('/:id', eliminarPost)
router.put('/:id', modificarPost)


module.exports = router