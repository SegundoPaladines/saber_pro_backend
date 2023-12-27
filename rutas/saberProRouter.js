import express from "express";
import { actualizarSaberPro, buscarSaberPro, buscarSaberProEst, crearSaberPro, eliminarSaberPro, listarSaberPro } from "../controladores/saberProControlador.js";

const saberProRouter = express.Router();

saberProRouter.get('/', (req, res) => {
    listarSaberPro(req, res);
});
saberProRouter.get('/buscar/:id', (req, res) => {
    buscarSaberPro(req, res);
});
saberProRouter.get('/buscar/estudiante/:id', (req, res) => {
    buscarSaberProEst(req, res);
});
saberProRouter.post('/crear', (req, res) => {
    crearSaberPro(req, res);
});
saberProRouter.delete('/eliminar/:id', (req, res) => {
    eliminarSaberPro(req, res);
});
saberProRouter.put('/actualizar/:id', (req, res) => {
    actualizarSaberPro(req, res);
});

export { saberProRouter };