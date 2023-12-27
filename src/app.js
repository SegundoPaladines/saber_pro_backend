import express from "express";
import cors from "cors";
import { facultadesRouter } from "../rutas/facultadesRouter.js";
import { programasRouter } from "../rutas/programasRouter.js";
import { estudiantesRouter } from "../rutas/estudiantesRouter.js";
import { saberOnceRouter } from "../rutas/saberOnceRouter.js";

import { db } from "../database/conexion.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

const PORT = 9000;

db.authenticate().then(()=>{
    console.log("La base de datos ha sido cargada con exito");
}).catch((r) => {
    console.log("Error al cargar la base de datos: "+e);
});

app.get("/", (req, res) => {res.send("Hola Desde Backend MySQL");});

app.use('/facultades', facultadesRouter);

app.use('/programas', programasRouter);

app.use('/estudiantes', estudiantesRouter);
app.use('/saber/once', saberOnceRouter);

db.sync().then(() => {
    app.listen(PORT, ()=>{
        console.log(`Servidor inicializado en el puerto: ${PORT}`);
    });
}).catch((e) => {
    console.log("No se pudo sincronizar con la base de datos: "+e);
});