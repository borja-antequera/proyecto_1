const EXPRESS = require('express')
const APP = EXPRESS()
const PATH = require('path')

APP.listen(3000, ()=> console.log("He levantado el puerto 3000"))

APP.get('/:city',(req,res)=> res.sendFile(PATH.join(__dirname+`/assets/public/${req.params.city}.html`)))
