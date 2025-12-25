const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());


// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "Bienvenido a mensaje",
    });
});

// DATABASES
const sequelize = require("./config/database");
const Mensaje = require("./models/mensaje");

sequelize.sync({ force: false })
    .then(() => console.log("DB sincronizada"))
    .catch(err => console.log(`Error al sincronizar la db ${err}`));

module.exports = app;