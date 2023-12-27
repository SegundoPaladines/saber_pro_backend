import { programas } from "../modelos/programaModelo.js"

const listarProgramas = (req, res ) => {
    programas.findAll().then((r) => {
        res.status(200).json(r);
    }).catch((e)=>{
        res.status(500).json({type:"error", mensaje:"No se a podido encontrar ningun registro "+e});
    });

    return;
}

const buscarPrograma= (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    programas.findByPk(id).then((r) => {
        res.status(200).json(r);
    }).catch((e) => {
        res.status(500).json({type:"error", mensaje:"No se a podido encontrar el registro "+e});
    });

    return;
}

const crearPrograma = (req, res) => {
    if(!req.body.nombre){
        res.status(400).json({type:"error", mensaje:"El campo nombre es requerido"});

        return;
    }

    if(!req.body.facultad){
        res.status(400).json({type:"error", mensaje:"El campo facultad es requerido"});

        return;
    }

    const dataset = {
        nombre:req.body.nombre,
        logo:req.body.logo,
        facultad:req.body.facultad
    }

    programas.create(dataset).then((r) => {
        res.status(200).json({
            tipo:'success',
            mensaje: "Programa registrado con exito"
        });
    }).catch((e)=>{
        res.status(500).json({
            tipo:'error',
            mensaje: "No se ha podido registrar el programa "+e}
        );
    });

    return;
}

const eliminarPrograama = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    programas.destroy(
        { where: {pk:id} }
    ).then((r) => {
        res.status(200).json({tipo:'success', mensaje: "Programa eliminado exitosamente"});
    }).catch((e) => {
        res.status(500).json({tipo:'error', mensaje: "No se ha podido eliminar el registro "+e});
    });

    return;
}

const actualizarPrograma = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    if(!req.body.nombre && !req.body.logo && !req.body.facultad){
        res.status(400).json({type:"error", mensaje:"Ningun campo para actualizar"});

        return;
    }

    const nombre = req.body.nombre;
    const logo = req.body.logo;
    const facultad = req.body.facultad;

    programas.update({
        nombre:nombre,
        logo:logo,
        facultad:facultad
    },{where:{pk:id}}
    ).then((r) => {
        res.status(200).json({tipo:'success', mensaje: "Programa actualizado exitosamente"});
    }).catch((e) => {
        res.status(500).json({tipo:'error', mensaje: "No se ha podido actualizar el registro "+e});
    });

    return;
}

export { listarProgramas, buscarPrograma, crearPrograma, eliminarPrograama, actualizarPrograma };