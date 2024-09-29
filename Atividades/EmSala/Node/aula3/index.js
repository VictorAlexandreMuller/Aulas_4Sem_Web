const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());

// Conexão com o banco de dados
const Cliente = require("./cliente");

// Configurar o CORS
const cors = require("cors");
app.use(cors());

// Método Get para retornar todos os clientes
app.get("/clientes", Cliente.getClientes);

// Método Get para retornar apenas um cliente por id
app.get("/clientes/:id", Cliente.getCliente);

// Método Post para cadastrar um cliente
app.post("/clientes", Cliente.insertCliente);

// Método Put para atualizar um cliente
app.put("/clientes/:id", Cliente.updateCliente);

// Método Delete para excluir um cliente
app.delete("/clientes/:id", Cliente.excluirCliente);

app.listen(2900, () => {
  console.log("O servidor está rodando na porta 2900.");
});
