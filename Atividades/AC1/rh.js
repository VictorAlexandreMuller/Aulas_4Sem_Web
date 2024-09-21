// Método de conexão com o banco de dados MySQL

async function connect() {
  const mysql = require("mysql2/promise");
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "rhac1",
    port: 3306,
  });

  console.log("Conectou no MySQL");
  global.connection = connection;
  return connection;
}

connect();

//////////////////////////////////////////////////////////////////////

// 2.	Crie requisições GET para trazer as seguintes informações:
// a.	Todos os cargos;

async function getTodosOsCargos(req, res) {
  const conn = await connect();
  const TodosOsCargos = await conn.query("SELECT * FROM cargo");
  console.log(TodosOsCargos[0]);
  res.send(TodosOsCargos[0]);
}

// b.	Todos os setores;

async function getTodosOsSetores(req, res) {
  const conn = await connect();
  const TodosOsSetores = await conn.query("SELECT * FROM setor");
  console.log(TodosOsSetores[0]);
  res.send(TodosOsSetores[0]);
}

// c.	Todos os funcionários;

async function getTodosOsFuncionarios(req, res) {
  const conn = await connect();
  const TodosOsFuncionarios = await conn.query("SELECT * FROM funcionario");
  console.log(TodosOsFuncionarios[0]);
  res.send(TodosOsFuncionarios[0]);
}

// d.	Setor com o nome passado por querystring

async function getSetor(req, res) {
  const conn = await connect();
  let cod_setor = req.query.cod_setor;
  const setorEspecifico = await conn.query(
    "SELECT * FROM setor WHERE cod_setor = ?",
    cod_setor
  );
  console.log(setorEspecifico[0]);
  res.send(setorEspecifico[0]);
}

// e.	Funcionário com o parâmetro nome passado por :id;

async function getFuncionario(req, res) {
  const conn = await connect();
  let cod_funcionario = req.params.cod_funcionario;
  const funcionarioEspecifico = await conn.query(
    "SELECT * FROM funcionario WHERE cod_funcionario = ?",
    cod_funcionario
  );
  console.log(funcionarioEspecifico[0]);
  res.send(funcionarioEspecifico[0]);
}

// f.	Todos os funcionários do cargo passado como parâmetro no body da requisição;

async function getFuncionariosDoCargo(req, res) {
  const conn = await connect();
  let cod_cargo = req.body.cod_cargo;
  const funcionariosDoCargo = await conn.query(
    "SELECT * FROM funcionario WHERE cod_cargo = ?",
    cod_cargo
  );
  console.log(funcionariosDoCargo[0]);
  res.send(funcionariosDoCargo[0]);
}

// g.	Todos os cargos que não possuem funcionário

async function getCargosSemFuncionarios(req, res) {
  const conn = await connect();
  let cod_cargo = req.params.cod_cargo;
  const funcionariosDoCargo = await conn.query(
    "SELECT cargo.nome, cargo.salario FROM cargo LEFT JOIN funcionario ON cargo.cod_cargo = funcionario.cod_cargo WHERE funcionario.cod_funcionario IS NULL;",
    cod_cargo
  );
  console.log(funcionariosDoCargo[0]);
  res.send(funcionariosDoCargo[0]);
}

//////////////////////////////////////////////////////////////////////
// 3.	Crie requisições Post para inserir:
// a.	Funcionário

async function insertFuncionario(req, res) {
  const conn = await connect();
  const { cod_funcionario, nome, data_admissao, cod_cargo, cod_setor } =
    req.body;
  const result = await conn.query(
    "INSERT INTO funcionario (cod_funcionario, nome, data_admissao, cod_cargo, cod_setor) VALUES (?, ?, ?, ?, ?)",
    [cod_funcionario, nome, data_admissao, cod_cargo, cod_setor]
  );
  console.log(result);
  res.send(result);
}

//////////////////////////////////////////////////////////////////////
// 4.	Crie uma requisição Put para atualizar Funcionário.

async function updateFuncionario(req, res) {
  const conn = await connect();
  let cod_funcionario = req.params.cod_funcionario;
  const { nome, data_admissao, cod_cargo, cod_setor } = req.body;

  const result = await conn.query(
    "UPDATE funcionario SET nome = ?, data_admissao = ?, cod_cargo = ?, cod_setor = ? WHERE cod_funcionario = ?",
    [nome, data_admissao, cod_cargo, cod_setor, cod_funcionario]
  );
  console.log(result);
  res.send(result);
}

//////////////////////////////////////////////////////////////////////
// 5.	Crie uma requisição Delete para excluir Funcionário.

async function excluirFuncionario(req, res) {
  const conn = await connect();
  let cod_funcionario = req.params.cod_funcionario;
  const result = await conn.query(
    "delete from funcionario where cod_funcionario = ?",
    cod_funcionario
  );
  res.send(result);
}

//////////////////////////////////////////////////////////////////////

module.exports = {
  getCargosSemFuncionarios,
  getFuncionariosDoCargo,
  getFuncionario,
  getSetor,
  getTodosOsFuncionarios,
  getTodosOsSetores,
  getTodosOsCargos,
};
