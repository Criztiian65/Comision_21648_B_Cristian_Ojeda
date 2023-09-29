const {postModel}  = require ('../Model/Post')


async function crearPost(req, res) {
   
     const { titulo_del_post, contenido, url } = req.body
    await postModel.create({
      titulo_del_post:titulo_del_post,
      contenido:contenido,
      url:url
    })

    res.redirect('/gets/all-posts')

   }


async function modificarPost (req, res){ 

    const {id, titulo_del_post, contenido, url} = req.body
    const postM = await postModel.findByPk(id)
    await postM.update({titulo_del_post, contenido, url})


    res.redirect('/gets/all-posts')
       
}

async function pag_modificacion (req, res){
    const postId = req.params.id
    const post = await postModel.findByPk(postId)


    res.render('modificar-post', {post})
}

async function eliminarPost (req, res){ 
    const id = req.params.id

        await postModel.destroy({
            where: {
                id:id
            }
        })
       
        res.redirect('/gets/all-posts')
    }  
    

async function listaDePost (req, res){ 
    const todosLosPost = await postModel.findAll()

    
    res.render('todos-los-post',{todosLosPost})
    
}

async function unicoPost (req, res){ 
    const id = req.params.id
    const post = await postModel.findByPk(id)
    if (post==null) {
        return res.send ('No existe este post')
    }
    res.render('un-post', { post } )
    
}

function pagForm(req, res){

    res.render('formulario-post')

}

module.exports = {
    crearPost,
    modificarPost,
    eliminarPost,
    listaDePost,
    unicoPost,
    pagForm,
    pag_modificacion
}