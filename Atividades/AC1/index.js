const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());

// Conexão com o banco de dados
const rhac1 = require("./rh");

// Configurar o CORS
const cors = require("cors");
app.use(cors());

/////////////////////////////////////////////////////////////////////////
// 2.	Crie requisições GET para trazer as seguintes informações:
// a.	Todos os cargos;

app.get("/cargo/todos", rhac1.getTodosOsCargos);
// R: http://localhost:2901/cargo/todos

/////////////////////////////////////////////////////////////////////////
// b.	Todos os setores;

app.get("/setor/todos", rhac1.getTodosOsSetores);
// R: http://localhost:2901/setor/todos

/////////////////////////////////////////////////////////////////////////
// c.	Todos os funcionários;

app.get("/funcionario/todos", rhac1.getTodosOsFuncionarios);
// R: http://localhost:2901/funcionario/todos

/////////////////////////////////////////////////////////////////////////
// d.	Setor com o nome passado por querystring

app.get("/setor", rhac1.getSetor);
// R: http://localhost:2901/setor?nome=Financeiro

/////////////////////////////////////////////////////////////////////////
// e.	Funcionário com o parâmetro nome passado por :id;

app.get("/funcionario/nome/:nome", rhac1.getFuncionario);
// R: http://localhost:2901/funcionario/nome/Maria%20Oliveira
// R: http://localhost:2901/funcionario/nome/Daniela%20Costa

/////////////////////////////////////////////////////////////////////////
// f.	Todos os funcionários do cargo passado como parâmetro no body da requisição;

app.get("/funcionario/cargo", rhac1.getFuncionariosDoCargo);
// R: Foto 'f-getBody' na pasta 'assets' dessa prova.

/////////////////////////////////////////////////////////////////////////
// g.	Todos os cargos que não possuem funcionário

app.get("/funcionario/semCargo", rhac1.getCargosSemFuncionarios);
// R: http://localhost:2901/funcionario/semCargo

/////////////////////////////////////////////////////////////////////////
// 3.	Crie requisições Post para inserir:
// a.	Funcionário

app.post("/funcionario/inserir", rhac1.insertFuncionario);

/////////////////////////////////////////////////////////////////////////
// 4.	Crie uma requisição Put para atualizar Funcionário.

app.put("/funcionario/atualizar/:cod_funcionario", rhac1.updateFuncionario);

/////////////////////////////////////////////////////////////////////////
// 5.	Crie uma requisição Delete para excluir Funcionário.

app.delete("/funcionario/excluir/:cod_funcionario", rhac1.excluirFuncionario);

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

app.listen(2901, () => {
  console.log("O servidor está rodando na porta 2901.");
});
