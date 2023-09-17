// const express = require('express')
const postModel = require ('../Model/Post')


async function crearPost (req, res){ 
    // const {titulo_del_post, contenido, url}= req.body
    // await postModel.create({
    //     titulo_del_post,
    //     contenido,
    //     url
    // })
    // res.render('index')
    res.send('Creando Post')
    
}
async function modificarPost (req, res){ 
    // const {titulo_del_post, contenido, url}= req.body
    // const id = req.params.id
    
    // await postModel.update({titulo_del_post, contenido, url}, { 
    //     where: {
    //     id:id
    // }}), 
    res.send('Post modificado')
       
}
async function eliminarPost (req, res){ 
    // const {titulo_del_post, contenido, url}= req.body
    // const id = req.params.id

    // await postModel.destroy({
    //     where: {
    //         id:id
    //     }
    // })
    res.send('Eliminando Post')
}

async function listaDePost (req, res){ 
    const todosLosPost = await postModel.findAll()
    res.render('index', {todosLosPost})
    // res.send('Lista de post')
    
}
async function unicoPost (req, res){ 
    // const id = req.params.id
    
    // // const Post = await postModel.findByPk(id)
    // res.send('Tu Post' + Post)
    
    res.send('Unico post')
}

module.exports = {
    crearPost,
    modificarPost,
    eliminarPost,
    listaDePost,
    unicoPost
}