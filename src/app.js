const express = require("express");
const app = express();

// Ruta principal
app.get("/", (req, res) => {
  res.json({Titulo: "Portfolio Backend"})
})

// Morgan
const morgan = require("morgan");
app.use(morgan("dev"));

module.exports = app;
