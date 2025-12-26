const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());


// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "Bienvenido a mensaje",
        endpoints: "mensaje/"
    });
});

// URLs
const router = require("./routes/mensaje-route");
app.use("/mensaje", router);


// DATABASES
const sequelize = require("./config/database");
const Mensaje = require("./models/mensaje");

sequelize.sync({ force: false })
    .then(() => console.log("DB sincronizada"))
    .catch(err => console.log(`Error al sincronizar la db ${err}`));

module.exports = app;