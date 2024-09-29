// Método de conexão com o banco de dados MySQL

async function connect() {
  const mysql = require("mysql2/promise");
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "usbw",
    database: "vendased",
    port: 3308,
  });

  console.log("Conectou no MySQL");
  global.connection = connection;
  return connection;
}

connect();

async function getClientes(req, res) {
  const conn = await connect();
  const clientes = await conn.query("SELECT * FROM cliente");
  console.log(clientes[0]);
  res.send(clientes[0]);
}

async function getCliente(req, res) {
  const conn = await connect();
  let id = req.params.id;
  const clientes = await conn.query("SELECT * FROM cliente WHERE id = ?", id);
  console.log(clientes[0]);
  res.send(clientes[0]);
}

async function insertCliente(req, res) {
  const conn = await connect();
  const {
    nome,
    rg,
    cpf,
    email,
    telefone,
    celular,
    cep,
    endereco,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  } = req.body;
  if (!nome || !email)
    return res.status(400).send("Nome e email são obrigatórios");
  const result = await conn.query(
    "INSERT INTO cliente (nome, rg, cpf, email, telefone, celular, cep, endereco, numero, " +
      "complemento, bairro, cidade, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      nome,
      rg,
      cpf,
      email,
      telefone,
      celular,
      cep,
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
    ]
  );
  console.log(result);
  res.send(result);
}

async function atualizarCliente(req, res) {
  const conn = await connect();
  let id = req.params.id;
  const {
    nome,
    rg,
    cpf,
    email,
    telefone,
    celular,
    cep,
    endereco,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  } = req.body;
  const result = await conn.query();
  res.send(result);
}

async function updateCliente(req, res) {
  const conn = await connect();
  let id = req.params.id;
  const {
    nome,
    rg,
    cpf,
    email,
    telefone,
    celular,
    cep,
    endereco,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  } = req.body;

  if (!nome || !email)
    return res.status(400).send("Nome e email são obrigatórios");

  const result = await conn.query(
    "UPDATE cliente SET nome = ?, rg = ?, cpf = ?, email = ?, telefone = ?, celular = ?, cep = ?, endereco = ?, numero = ?, complemento = ?, bairro = ?, cidade = ?, estado = ? WHERE id = ?",
    [
      nome,
      rg,
      cpf,
      email,
      telefone,
      celular,
      cep,
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      id,
    ]
  );
  console.log(result);
  res.send(result);
}

async function excluirCliente(req, res) {
  const conn = await connect();
  let id = req.params.id;
  const result = await conn.query("delete from cliente where id = ?", id);
  res.send(result);
}

module.exports = {
  getClientes,
  getCliente,
  insertCliente,
  updateCliente,
  excluirCliente,
};
