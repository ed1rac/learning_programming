const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
  console.log("Olá, mundo cruel!");
});

app.listen(3000, () => {
  console.log("Servidor está rodando na porta 3000");
});
