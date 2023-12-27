import { Sequelize } from "sequelize";
import { db } from "../database/conexion.js";
import { estudiantes } from "./estudianteModelo.js";

const saber_pro = db.define('saber_pro', {
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

saber_pro.belongsTo(estudiantes, {foreignKey:'estudiantePK'});

export { saber_pro };