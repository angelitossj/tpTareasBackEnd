const express = require('express')
const cors = require('cors')
const conexion = require("./conexionDb")
require('dotenv').config()
const app = express()

conexion()
const port = 3000
app.use(express.json())
app.use(cors())
app.use(require("./src/routes/rutasTareas"))

app.listen(port,()=>{
    console.log(`servidor iniciado en el puerto ${port}`)
})