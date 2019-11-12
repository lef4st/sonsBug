require("dotenv/config");
const express = require("express");
const mongoose = require("./src/database/conexao");
const routes = require("./src/routes/route");
const path = require("path");
var cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use("/icons", express.static("icons"));
app.use("/uploads", express.static("uploads"));

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(port);

console.log("Falou mamae " + port);
