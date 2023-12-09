import { Sequelize } from "sequelize";

const db = new Sequelize('onlykost','root','',{
    host:'localhost',
    dialect:'mysql'
});

export default db;