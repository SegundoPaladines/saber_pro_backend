import { facultades } from "../modelos/facultadModelo.js"

const listarFacultades = (req, res ) => {
    facultades.findAll().then((r) => {
        res.status(200).json(r);
    }).catch((e)=>{
        res.status(500).json({type:"error", mensaje:"No se a podido encontrar ningun registro "+e});
    });

    return;
}

const buscarFacultad = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    facultades.findByPk(id).then((r) => {
        res.status(200).json(r);
    }).catch((e) => {
        res.status(500).json({type:"error", mensaje:"No se a podido encontrar el registro "+e});
    });

    return;
}

const crearFacultad = (req, res) => {
    if(!req.body.nombre){
        res.status(400).json({type:"error", mensaje:"El campo nombre es requerido"});

        return;
    }

    const dataset = {
        nombre:req.body.nombre,
        logo:req.body.logo
    }

    facultades.create(dataset).then((r) => {
        res.status(200).json({
            tipo:'success',
            mensaje: "Facultad registrada con exito"
        });
    }).catch((e)=>{
        res.status(500).json({
            tipo:'error',
            mensaje: "No se ha podido registrar la  facultad "+e}
        );
    });

    return;
}

const eliminarFacultad = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    facultades.destroy(
        { where: {pk:id} }
    ).then((r) => {
        res.status(200).json({tipo:'success', mensaje: "Facultad eliminada exitosamente"});
    }).catch((e) => {
        res.status(500).json({tipo:'error', mensaje: "No se ha podido eliminar el registro "+e});
    });

    return;
}

const actualizarFacultad = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({type:"error", mensaje:"El id es requerido"});

        return;
    }

    if(!req.body.nombre && !req.body.logo){
        res.status(400).json({type:"error", mensaje:"Ningun campo para actualizar"});

        return;
    }

    const nombre = req.body.nombre;
    const logo = req.body.logo;

    facultades.update({
        nombre:nombre,
        logo:logo
    },{where:{pk:id}}
    ).then((r) => {
        res.status(200).json({tipo:'success', mensaje: "Facultad actualizada exitosamente"});
    }).catch((e) => {
        res.status(500).json({tipo:'error', mensaje: "No se ha podido actualizar el registro "+e});
    });

    return;
}

export {listarFacultades, buscarFacultad, crearFacultad, eliminarFacultad, actualizarFacultad};