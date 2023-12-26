import { Sequelize } from "sequelize";

export const db = new Sequelize('universidad', 'universidad', '123', {
    dialect:"mysql",
    host:"localhost"
});