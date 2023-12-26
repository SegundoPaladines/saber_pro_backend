import { Sequelize } from "sequelize";
import { db } from "../database/conexion.js"; 

const facultades = db.define('facultades',{
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
    }
});

export { facultades };