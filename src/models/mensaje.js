const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Mensaje = sequelize.define("Mensaje", {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: len[1, 100]
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: len[1, 100]
    },
    message: {
        type: DataTypes.STRING(500),
        allowNull: false,
        validate: len[1, 500]
    } 
});

module.exports = Mensaje;