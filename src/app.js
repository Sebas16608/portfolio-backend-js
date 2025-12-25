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

module.exports = app;