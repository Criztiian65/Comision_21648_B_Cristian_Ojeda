const {postModel}  = require ('../Model/Post')


async function crearPost(req, res) {
    const { titulo_del_post, contenido, url } = req.body
    await postModel.create({
      titulo_del_post:titulo_del_post,
      contenido:contenido,
      url:url
    })
    res.send('post creado')
  }

  async function modificarPost (req, res){ 
    const id = req.params.id
    const {titulo_del_post, contenido, url}= req.body
    
    await postModel.update({titulo_del_post, contenido, url}, { 
        where: {
        id:id
        }
    }) 
    res.send('Post modificado')
       
}

async function eliminarPost (req, res){ 
    const id = req.params.id

    await postModel.destroy({
        where: {
            id:id
        }
    })
    res.send('Eliminando Post')
}

async function listaDePost (req, res){ 
    const todosLosPost = await postModel.findAll()
    res.json(todosLosPost)
    // res.send('Lista de post')
    
}

async function unicoPost (req, res){ 
    const id = req.params.id
    const post = await postModel.findByPk(id)
    if (post==null) {
        return res.send ('No existe este post')
    }

    res.json(post)
}

module.exports = {
    crearPost,
    modificarPost,
    eliminarPost,
    listaDePost,
    unicoPost
}