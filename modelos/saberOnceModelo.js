import { Sequelize } from "sequelize";
import { db } from "../database/conexion.js";
import { estudiantes } from "./estudianteModelo.js";

const saber_once = db.define('saber_once', {
    pk:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    estudiantePK:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    lectura_critica:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    razonamiento_cuantitativo:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    ingles:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    competencias_ciudadanas:{
        type:Sequelize.INTEGER,
        allowNull:false,
    }
});

saber_once.belongsTo(estudiantes, {foreignKey:'estudiantePK'});

export { saber_once };