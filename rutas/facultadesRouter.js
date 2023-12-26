import express from "express";
import { listarFacultades, buscarFacultad, crearFacultad, eliminarFacultad, actualizarFacultad } from "../controladores/facultadControlador.js";

const facultadesRouter = express.Router();

facultadesRouter.get('/', (req, res) => {
    listarFacultades(req, res);
});
facultadesRouter.get('/buscar/:id', (req, res) => {
    buscarFacultad(req, res);
});

facultadesRouter.post('/crear', (req, res) => {
    crearFacultad(req, res);
});
facultadesRouter.delete('/eliminar/:id', (req, res) => {
    eliminarFacultad(req, res);
});
facultadesRouter.put('/actualizar/:id', (req, res) => {
    actualizarFacultad(req, res);
});

export { facultadesRouter };