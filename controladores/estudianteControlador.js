import { where } from "sequelize";
import { estudiantes } from "../modelos/estudianteModelo.js";

const listarEstudiantes = (req, res ) => {
    estudiantes.findAll().then((r) => {
        res.status(200).json(r);
    }).catch((e)=>{
        res.status(500).json({type:"error", mensaje:"No se a podido encontrar ningun registro "+e});
    });

    return;
}

const buscarEstudianteProg = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    estudiantes.findAll({where:{programaPK:id}}).then((r) => {
        res.status(200).json(r);
    }).catch((e) => {
        res.status(500).json({type:"error", mensaje:"No se a podido encontrar el registro "+e});
    });

    return;
}

const buscarEstudiante= (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    estudiantes.findByPk(id).then((r) => {
        res.status(200).json(r);
    }).catch((e) => {
        res.status(500).json({type:"error", mensaje:"No se a podido encontrar el registro "+e});
    });

    return;
}

const crearEstudiante = (req, res) => {
    if(!req.body.nombre){
        res.status(400).json({type:"error", mensaje:"El campo nombre es requerido"});

        return;
    }

    if(!req.body.programaPK){
        res.status(400).json({type:"error", mensaje:"El campo programa es requerido"});

        return;
    }

    const dataset = {
        nombre:req.body.nombre,
        foto:req.body.foto,
        programaPK:req.body.programaPK
    }

    estudiantes.create(dataset).then((r) => {
        res.status(200).json({
            type:'success',
            mensaje: "Estudiante registrado con exito"
        });
    }).catch((e)=>{
        res.status(500).json({
            type:'error',
            mensaje: "No se ha podido registrar al estudiante "+e}
        );
    });

    return;
}

const eliminarEstudiante = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    estudiantes.destroy(
        { where: {pk:id} }
    ).then((r) => {
        res.status(200).json({type:'success', mensaje: "Estudiante eliminado exitosamente"});
    }).catch((e) => {
        res.status(500).json({type:'error', mensaje: "No se ha podido eliminar el registro "+e});
    });

    return;
}

const actualizarEstudiante = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    if(!req.body.nombre && !req.body.foto && !req.body.programaPK){
        res.status(400).json({type:"error", mensaje:"Ningun campo para actualizar"});

        return;
    }

    const nombre = req.body.nombre;
    const foto = req.body.foto;
    const programaPK = req.body.programaPK;

    estudiantes.update({
        nombre:nombre,
        foto:foto,
        programaPK:programaPK
    },{where:{pk:id}}
    ).then((r) => {
        res.status(200).json({type:'success', mensaje: "Estudiante actualizado exitosamente"});
    }).catch((e) => {
        res.status(500).json({type:'error', mensaje: "No se ha podido actualizar el registro "+e});
    });

    return;
}

export { listarEstudiantes, buscarEstudianteProg ,buscarEstudiante, crearEstudiante, eliminarEstudiante, actualizarEstudiante };