import express from "express";
import { actualizarPrograma, buscarPrograma, buscarProgramaFac, crearPrograma, eliminarPrograama, listarProgramas } from "../controladores/programaControlador.js";

const programasRouter = express.Router();

programasRouter.get('/', (req, res) => {
    listarProgramas(req, res);
});
programasRouter.get('/buscar/:id', (req, res) => {
    buscarPrograma(req, res);
});
programasRouter.get('/buscar/facultad/:id', (req, res) => {
    buscarProgramaFac(req, res);
});
programasRouter.post('/crear', (req, res) => {
    crearPrograma(req, res);
});
programasRouter.delete('/eliminar/:id', (req, res) => {
    eliminarPrograama(req, res);
});
programasRouter.put('/actualizar/:id', (req, res) => {
    actualizarPrograma(req, res);
});

export { programasRouter };