import { saber_once } from "../modelos/saberOnceModelo.js";

const listarSaberOnce = (req, res ) => {
    saber_once.findAll().then((r) => {
        res.status(200).json(r);
    }).catch((e)=>{
        res.status(500).json({type:"error", mensaje:"No se a podido encontrar ningun registro "+e});
    });

    return;
}

const buscarSaberOnceEst = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    saber_once.findOne({where:{estudiantePK:id}}).then((r) => {
        res.status(200).json(r);
    }).catch((e)=>{
        res.status(500).json({type:"error", mensaje:"No se a podido encontrar ningun registro "+e});
    });

    return;
}

const buscarSaberOnce = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    saber_once.findByPk(id).then((r) => {
        res.status(200).json(r);
    }).catch((e) => {
        res.status(500).json({type:"error", mensaje:"No se a podido encontrar el registro "+e});
    });

    return;
}

const crearSaberOnce = (req, res) => {
    if(!req.body.estudiantePK){
        res.status(400).json({type:"error", mensaje:"El campo programa es requerido"});

        return;
    }

    if(!req.body.lectura_critica){
        res.status(400).json({type:"error", mensaje:"El campo lectura_critica es requerido"});

        return;
    }

    if(!req.body.razonamiento_cuantitativo){
        res.status(400).json({type:"error", mensaje:"El campo razonamiento_cuantitativo es requerido"});

        return;
    }

    if(!req.body.ingles){
        res.status(400).json({type:"error", mensaje:"El campo ingles es requerido"});

        return;
    }

    if(!req.body.competencias_ciudadanas){
        res.status(400).json({type:"error", mensaje:"El campo programa es requerido"});

        return;
    }

    const dataset = {
        estudiantePK:req.body.estudiantePK,
        lectura_critica:req.body.lectura_critica,
        razonamiento_cuantitativo:req.body.razonamiento_cuantitativo,
        ingles:req.body.ingles,
        competencias_ciudadanas:req.body.competencias_ciudadanas
    }

    saber_once.create(dataset).then((r) => {
        res.status(200).json({
            type:'success',
            mensaje: "Prueba registrada con exito"
        });
    }).catch((e)=>{
        res.status(500).json({
            type:'error',
            mensaje: "No se ha podido registrar la prueba "+e}
        );
    });

    return;
}

const eliminarSaberOnce = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    saber_once.destroy(
        { where: {pk:id} }
    ).then((r) => {
        res.status(200).json({type:'success', mensaje: "Prueba eliminada exitosamente"});
    }).catch((e) => {
        res.status(500).json({type:'error', mensaje: "No se ha podido eliminar el registro "+e});
    });

    return;
}

const actualizarSaberOnce = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    if(!req.body.estudiantePK && !req.body.lectura_critica && !req.body.razonamiento_cuantitativo && !req.body.ingles && !req.body.competencias_ciudadanas){
        res.status(400).json({type:"error", mensaje:"Ningun campo para actualizar"});

        return;
    }

    const estudiantePK = req.body.estudiantePK;
    const lectura_critica = req.body.lectura_critica;
    const razonamiento_cuantitativo = req.body.razonamiento_cuantitativo;
    const ingles = req.body.ingles;
    const competencias_ciudadanas = req.body.competencias_ciudadanas;

    saber_once.update({
        estudiantePK:estudiantePK,
        lectura_critica:lectura_critica,
        razonamiento_cuantitativo:razonamiento_cuantitativo,
        ingles:ingles,
        competencias_ciudadanas:competencias_ciudadanas
    },{where:{pk:id}}
    ).then((r) => {
        res.status(200).json({type:'success', mensaje: "Prueba actualizada exitosamente"});
    }).catch((e) => {
        res.status(500).json({type:'error', mensaje: "No se ha podido actualizar el registro "+e});
    });

    return;
}

export { listarSaberOnce, buscarSaberOnceEst, buscarSaberOnce, crearSaberOnce, eliminarSaberOnce, actualizarSaberOnce };