import { Sequelize } from "sequelize";
import { db } from "../database/conexion.js";
import { programas } from "./programaModelo.js";

const estudiantes = db.define('estudiantes', {
    pk:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:Sequelize.STRING,
        allowNull:false
    },
    foto:{
        type:Sequelize.STRING,
        allowNull:true
    },
    programaPK:{
        type:Sequelize.INTEGER,
        allowNull:false,
    }
});

estudiantes.belongsTo(programas, {foreignKey:'programaPK'});

export { estudiantes };