import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Booking = db.define('booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    telp: DataTypes.STRING,
    tgl_pesan: DataTypes.DATE,
    rcn_pesan: DataTypes.STRING,
    jumlah: DataTypes.STRING,
    tipe: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Booking;

(async()=>{
    await db.sync();
})();