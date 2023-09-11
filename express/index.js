
const server = require ('node:http')


server.createServer(function(req,res){
    
    res.write("hola mundoww")
    res.end()
    
}).listen(4000)