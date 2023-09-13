const express = require('express')


function crearPost (req, res){ 
    res.send('Creando Post')
    res.end()
}
function modificarPost (req, res){ 
    res.send('Modificando Post')
    res.end()
}
function eliminarPost (req, res){ 
    res.send('Eliminando Post')
    res.end()
}
function listaDePost (req, res){ 
    res.send('Todos los Post')
    res.end()
}
function unicoPost (req, res){ 
    res.send('Tu Post')
    res.end()
}

module.exports = {
    crearPost,
    modificarPost,
    eliminarPost,
    listaDePost,
    unicoPost
}