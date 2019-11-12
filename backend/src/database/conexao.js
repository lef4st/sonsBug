const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URL_CONNECTION,
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log("Conectado no banco com sucesso.");
    } else {
      console.log("Erro ao conectar: " + err);
    }
  }
);

module.exports = mongoose;
