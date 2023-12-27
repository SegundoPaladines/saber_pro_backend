import { saber_pro } from "../modelos/saberProModelo.js";

const listarSaberPro = (req, res ) => {
    saber_pro.findAll().then((r) => {
        res.status(200).json(r);
    }).catch((e)=>{
        res.status(500).json({type:"error", mensaje:"No se a podido encontrar ningun registro "+e});
    });

    return;
}

const buscarSaberProEst = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    saber_pro.findOne({where:{estudiantePK:id}}).then((r) => {
        res.status(200).json(r);
    }).catch((e)=>{
        res.status(500).json({type:"error", mensaje:"No se a podido encontrar ningun registro "+e});
    });

    return;
}

const buscarSaberPro = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    saber_pro.findByPk(id).then((r) => {
        res.status(200).json(r);
    }).catch((e) => {
        res.status(500).json({type:"error", mensaje:"No se a podido encontrar el registro "+e});
    });

    return;
}

const crearSaberPro = (req, res) => {
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

    saber_pro.create(dataset).then((r) => {
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

const eliminarSaberPro = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    saber_pro.destroy(
        { where: {pk:id} }
    ).then((r) => {
        res.status(200).json({type:'success', mensaje: "Prueba eliminada exitosamente"});
    }).catch((e) => {
        res.status(500).json({type:'error', mensaje: "No se ha podido eliminar el registro "+e});
    });

    return;
}

const actualizarSaberPro = (req, res) => {
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

    saber_pro.update({
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

export { listarSaberPro, buscarSaberPro, crearSaberPro, buscarSaberProEst, eliminarSaberPro, actualizarSaberPro };