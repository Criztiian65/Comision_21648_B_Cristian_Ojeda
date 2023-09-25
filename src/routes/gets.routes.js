const { Router } = require ('express')
const router = Router()

const {
    listaDePost,
    unicoPost,
    crearPost,
    pagForm

} =require('../controllers/controllers')


router.get('/pag_post', pagForm)
router.get('/pag_post', crearPost)
router.get('/all-posts', listaDePost)
router.get('/:id', unicoPost)


module.exports = router