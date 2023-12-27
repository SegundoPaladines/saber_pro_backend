import express from "express";
import { actualizarSaberOnce, buscarSaberOnce, buscarSaberOnceEst, crearSaberOnce, eliminarSaberOnce, listarSaberOnce } from "../controladores/saberOnceControlador.js";

const saberOnceRouter = express.Router();

saberOnceRouter.get('/', (req, res) => {
    listarSaberOnce(req, res);
});
saberOnceRouter.get('/buscar/:id', (req, res) => {
    buscarSaberOnce(req, res);
});
saberOnceRouter.get('/buscar/estudiante/:id', (req, res) => {
    buscarSaberOnceEst(req, res);
});
saberOnceRouter.post('/crear', (req, res) => {
    crearSaberOnce(req, res);
});
saberOnceRouter.delete('/eliminar/:id', (req, res) => {
    eliminarSaberOnce(req, res);
});
saberOnceRouter.put('/actualizar/:id', (req, res) => {
    actualizarSaberOnce(req, res);
});

export { saberOnceRouter };