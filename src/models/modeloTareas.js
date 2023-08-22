const  {Schema , model } = require("mongoose")

const tareaSchema = new Schema ({
    nombre:{
        type:"string",
        required: true,
        
    },
    estado:{
        type:"string",
        required:"true",
        default:"pendiente"
    },
    isActive:{
        type:"boolean",
        default: true
    }

})







module.exports = model ('tareas',tareaSchema)