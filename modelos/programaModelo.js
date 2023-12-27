import { Sequelize } from "sequelize";
import { db } from "../database/conexion.js";
import { facultades } from "./facultadModelo.js";

const programas = db.define('programas', {
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
    logo:{
        type:Sequelize.STRING,
        allowNull:true
    },
    facultad:{
        type:Sequelize.INTEGER,
        allowNull:false,
    }
});

programas.belongsTo(facultades, {foreignKey:'facultad'});

export { programas };