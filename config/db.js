import { Sequelize } from "sequelize";

const db = new Sequelize('railway','root','FAfeFGGgcfa61gfF1bE42BaCd5-6D2Hb',{
    port: 39992,
    host:'roundhouse.proxy.rlwy.net',
    dialect:'mysql'
});

export default db;