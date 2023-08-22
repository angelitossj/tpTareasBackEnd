const TareaSchema = require("../models/modeloTareas")

const ctrlTareas =[]

ctrlTareas.traerTareas=async(req,res)=>{
try {
    const tareas = await TareaSchema.find({isActive:true})

    if (!tareas.length) {
        return res.json({
            message:"no existe ninguna tarea registrada en la base de datos"
        })
    }

    return res.json({
        message:"tareas encontrada con exito",
        tareas
    })

} catch (error) {
    return res.json({
        error: error.message
    })
}

}

ctrlTareas.traerTareasId =  async(req,res)=>{
    try {
        const idTarea= req.params.idTarea
        const tareas = await TareaSchema.findById(idTarea)
    
        // if (!tareas.length) {
        //     return res.json({
        //         message:"no existe ninguna tarea registrada en la base de datos"
        //     })
        // }
    
        return res.json({
            message:"tareas encontrada con exito",
            tareas
        })
    
    } catch (error) {
        return res.json({
            error: error.message
        })
    }
    
    }
    
ctrlTareas.crearTareas = async(req,res)=>{

    try {
        const {nombre}=req.body

        if (!nombre) {
            return res.json({
                messasge:"no hay informacion proporcionada"
            })
        }

        const nuevaTarea =  new TareaSchema({
            nombre
        })
        const tareita = await nuevaTarea.save()
        return res.json({
            message:"tarea creada con exito",
            tareita
        })

    } catch (error) {
        
    }
}

ctrlTareas.actualizarTareas = async(req,res)=>{
    try {
            const idTareas = req.params.idTarea
            const {nombre,estado}=req.body

            if(!idTareas,!nombre,!estado){
                return res.json({
                    message:"no viene id o informacion"
                })
            }
            const tareas = await TareaSchema.findById(idTareas)
            console.log(tareas)

            await tareas.updateOne({
                nombre,estado
            })

            return res.json({message:"tarea actualizada correctamente",tareas})

    } catch (error) {
        
    }
}
ctrlTareas.eliminarTareas = async(req,res)=>{
try {
    const idTareas = req.params.idTarea
     const tareas =await TareaSchema.findByIdAndUpdate(idTareas,{isActive:false})  
     return res.json({
        message:"tareas eliminada correctamente",
        tareas
        

     })
     
     
} catch (error) {
    res.json({
        error:error.message
    })
}

}

module.exports = ctrlTareas