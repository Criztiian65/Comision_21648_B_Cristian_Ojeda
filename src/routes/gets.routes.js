const { Router } = require ('express')
const router = Router()

const {
    listaDePost,
    unicoPost,
    pagForm,
    pag_modificacion

} =require('../controllers/controllers')

router.get('/', listaDePost)
router.get('/pag-post', pagForm)
router.get('/pag-modificacion/:id', pag_modificacion)
router.get('/all-posts', listaDePost)
router.get('/:id', unicoPost)


module.exports = router