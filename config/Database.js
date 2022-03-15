import { Sequelize } from "sequelize";

const db = new Sequelize('payuung_dev', 'root', process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});


export default db;