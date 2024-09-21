const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());

// Conexão com o banco de dados
const Cargo = require("./cargo");
const Funcionario = require("./funcionario");
const Setor = require("./setor");
const { getCargosSemFuncionarios, getTodosOsCargos } = require("./rh");

// Configurar o CORS
const cors = require("cors");
app.use(cors());

// Método Get para retornar apenas um cliente por id
app.get("/clientes/:id", Cliente.getCliente);

// Método Post para cadastrar um cliente
app.post("/clientes", Cliente.insertCliente);

// Método Put para atualizar um cliente
app.put("/clientes/:id", Cliente.updateCliente);

// Método Delete para excluir um cliente
app.delete("/clientes/:id", Cliente.excluirCliente);

// 2.	Crie requisições GET para trazer as seguintes informações:
// a.	Todos os cargos;

app.get("/cargo", getTodosOsCargos);

// b.	Todos os setores;
// c.	Todos os funcionários;
// d.	Setor com o nome passado por querystring
// e.	Funcionário com o parâmetro nome passado por :id;
// f.	Todos os funcionários do cargo passado como parâmetro no body da requisição;
// g.	Todos os cargos que não possuem funcionário
// 3.	Crie requisições Post para inserir:
// a.	Funcionário
// 4.	Crie uma requisição Put para atualizar Funcionário.
// 5.	Crie uma requisição Delete para excluir Funcionário.

app.listen(2901, () => {
  console.log("O servidor está rodando na porta 2901.");
});
