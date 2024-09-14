const express = require("express");
const app = express();
//usando o body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//simulando um banco de dados
let escola = [
  {
    ra: "1",
    nome: "João",
    disciplinas: [
      { codigo: "MAT101", nome: "Matemática", professor: "Prof. Carlos" },
      { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },
      { codigo: "POR101", nome: "Português", professor: "Prof. João" },
      { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" },
    ],
  },
  {
    ra: "2",
    nome: "Maria",
    disciplinas: [
      { codigo: "MAT101", nome: "Matemática", professor: "Prof. Carlos" },
      { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },
      { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" },
    ],
  },
  {
    ra: "3",
    nome: "Pedro",
    disciplinas: [
      { codigo: "CIE101", nome: "Ciências", professor: "Prof. João" },
      { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },
      { codigo: "POR101", nome: "Português", professor: "Prof. João" },
      { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" },
      { codigo: "EDF101", nome: "Educação Física", professor: "Prof. Carlos" },
    ],
  },
];

// Lista 02 – Exercícios desenvolvidos em Node.js
// com Express – API com dados mockudos.

// Desenvolva uma API, para manipular os dados de uma
// array com informações de uma escola, abaixo segue a
// estrutura do arquivo index.js.

// Tomando por base a estrutura passada desenvolva os
// seguintes endpoint:

// Ex1 - Exibir todos os alunos, onde a chamada
// deve apresentar “/alunos” em um método Get.

app.get("/alunos", (req, res) => {
  console.log("GET /alunos");
  res.json(escola);
});

// http://localhost:3000/alunos/

// Ex2 - Buscar um aluno pelo RA, onde a chamada deve
// apresentar “/alunos/:ra” em um método Get.

app.get("/alunos/:ra", (req, res) => {
  console.log("GET /alunos/:ra");
  let ra = req.params.ra;
  let aluno = escola.find((aluno) => aluno.ra == ra);
  if (aluno) {
    res.json(aluno);
  } else {
    res.status(404).send("Aluno não encontrado");
  }
});

// http://localhost:3000/alunos/1/
// http://localhost:3000/alunos/2/
// http://localhost:3000/alunos/3/

// Ex3 - Listar todas as disciplinas de um aluno, onde
// a chamada deve apresentar “/alunos/:ra/disciplinas”, em um método Get.

app.get("/alunos/:ra/disciplinas", (req, res) => {
  console.log("GET /alunos/:ra/disciplinas");
  let ra = req.params.ra;
  let disciplinas = req.params.disciplinas;
  let aluno = escola.find((aluno) => aluno.ra == ra);
  if (aluno) {
    res.json(aluno.disciplinas);
  } else {
    res.status(404).send("Aluno não encontrado");
  }
});

// http://localhost:3000/alunos/1/disciplinas/
// http://localhost:3000/alunos/2/disciplinas/
// http://localhost:3000/alunos/3/disciplinas/

// Ex4 - Adicionar uma disciplina para um aluno, onde a
// chamada deve apresentar “/alunos/:ra/disciplinas”, em um método Post.

app.post("/alunos/:ra/disciplinas", (req, res) => {
  console.log("POST /alunos/:ra/disciplinas");

  const ra = req.params.ra;

  const aluno = escola.find((aluno) => aluno.ra === ra);

  if (!aluno) {
    return res.status(404).json({ mensagem: "Aluno não encontrado" });
  }

  const novaDisciplina = req.body;

  aluno.disciplinas.push(novaDisciplina);

  res.status(201).json(aluno.disciplinas);
});

// No Postman:
// 1- Criar nova requisição POST.
// 2- Em Header: Key = Content-Type e Value = application/json
// 3- Em Body: Raw: {"codigo": "ING101",  "nome": "Inglês",  "professor": "Prof. Maria"}

// Abaixo o método Fetch criado pelo Postman para inserir em hardcore a
// materia de ingles da professora Maria na lista de disciplinas do aluno 1

// --------------------------------------------------------------------------
// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const raw = JSON.stringify({
//   codigo: "ING101",
//   nome: "Inglês",
//   professor: "Prof. Maria",
// });

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow",
// };

// fetch("http://localhost:3000/alunos/1/disciplinas", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
// --------------------------------------------------------------------------

// Ex5 - Atualizar os dados de um aluno, onde a
// chamada deve apresentar “/alunos/:ra em um método Put.

app.put("/alunos/:ra", (req, res) => {
  console.log("PUT /alunos/:ra");
  let ra = req.params.ra;
  let aluno = req.body;
  let index = escola.findIndex((aluno) => aluno.ra == ra);

  // { ...escola[index] }: Isso copia as propriedades do aluno encontrado no índice index (o aluno original) para um novo objeto.
  // { ...aluno }: Em seguida, o código espalha as propriedades do aluno enviado no corpo da requisição, sobrescrevendo as informações do aluno original.
  // ra: ra: Isso garante que o RA original não seja alterado, mantendo o RA do aluno encontrado, mesmo se o RA não for passado no corpo da requisição.

  if (index >= 0) {
    escola[index] = { ...escola[index], ...aluno, ra: ra };
    res.json(escola[index]);
  } else {
    res.status(404).send("Aluno não encontrado");
  }
});

// No Postman:
// 1- Criar nova requisição PUT.
// 2- Em Header: Key = Content-Type e Value = application/json
// 3- Em Body: Raw: {  "nome": "Alessandra",  "genero": "Feminino"}

// Abaixo o método Fetch criado pelo Postman para alterar o nome do
// aluno para Alessandra e adicionar a caracteristica "genero feminino" ao aluno 1

// --------------------------------------------------------------------------
// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const raw = JSON.stringify({
//   "nome": "Alessandra",
//   "genero": "Feminino"
// });

// const requestOptions = {
//   method: "PUT",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow"
// };

// fetch("http://localhost:3000/alunos/1", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
// --------------------------------------------------------------------------

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
