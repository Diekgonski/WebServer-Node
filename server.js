const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const hbs = require("hbs");

//Handlebars
app.set("view engine", "hbs");
//Registrar los parciales de handlebar
hbs.registerPartials(__dirname + "/views/partials", (err) => {});

//Mostrar contenido estatico
app.use(express.static("public"));

//Ruta home
app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Diego",
    titulo: "Curso de Node",
  });
});

app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: "Diego",
    titulo: "Curso de Node",
  });
});

app.get("/elements", function (req, res) {
  res.render("elements", {
    nombre: "Diego",
    titulo: "Curso de Node",
  });
});

app.listen(port, () => {
  console.log(`Escuchando Peticiones en el puerto ${port}`);
});
