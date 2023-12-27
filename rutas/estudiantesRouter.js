import express from "express";
import { actualizarEstudiante, buscarEstudiante, crearEstudiante, eliminarEstudiante, listarEstudiantes } from "../controladores/estudianteControlador.js";

const estudiantesRouter = express.Router();

estudiantesRouter.get('/', (req, res) => {
    listarEstudiantes(req, res);
});
estudiantesRouter.get('/buscar/:id', (req, res) => {
    buscarEstudiante(req, res);
});

estudiantesRouter.post('/crear', (req, res) => {
    crearEstudiante(req, res);
});
estudiantesRouter.delete('/eliminar/:id', (req, res) => {
    eliminarEstudiante(req, res);
});
estudiantesRouter.put('/actualizar/:id', (req, res) => {
    actualizarEstudiante(req, res);
});

export { estudiantesRouter };