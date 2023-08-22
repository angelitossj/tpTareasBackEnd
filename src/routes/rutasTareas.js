const router = require("express").Router();
const {traerTareas, crearTareas,actualizarTareas, eliminarTareas, traerTareasId}=require("../controllers/controladorTareas")


router.get("/tareas",traerTareas)
router.get("/tareas/:idTarea",traerTareasId)

router.post("/tareas",crearTareas)
router.put("/tareas/:idTarea",actualizarTareas)
router.delete("/tareas/:idTarea",eliminarTareas)







module.exports = router