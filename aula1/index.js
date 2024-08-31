const express = require("express");
const app = express();

// requisições usando o use possuem regras de hierarquia
// o "all" funciona como o "use", ele funciona como get, post, etc...
app.use("/alunos", (req, res, next) => {
  //res.send("agora eu mudei o caminho");
  console.log("Calma pessoal...");
  next();
});

app.get("/exemploGet", (req, res) => {
  res.send("Exemplo Get");
});

app.post("/exemploPost", (req, res) => {
  res.send("Exemplo Post");
});

app.all("/exemploAll", (req, res) => {
  res.send("Exemplo All");
});

// usando middleware
const lista01 = require("../Atividades/lista01");

app.get("/ola", (req, res) => {
  res.send(lista01.ola());
});

app.get("/ex01", (req, res) => {
  res.send(lista01.exercicio01("Edsonnnnn"));
});

app.get("/exemploJson", (req, res) => {
  res.json({
    nome: "Edson",
    idade: 23,
    endereco: {
      rua: "Rua 01",
      numero: 123,
      bairro: "Bairro 01",
    },
  });
});

// Passagem de parâmetros via URL
app.get("/ex02/:nome", (req, res) => {
  let nome = req.params.nome;
  res.send(lista01.exercicio01(nome));
});

app.get("/ex03/:numero1/:numero2", (req, res) => {
  let numero1 = req.params.numero1;
  let numero2 = req.params.numero2;
  res.send(lista01.divisao(numero1, numero2).toString());
});

app.get("/ex03Query", (req, res) => {
  let numero1 = req.query.numero1;
  let numero2 = req.query.numero2;
  res.send(lista01.divisao(numero1, numero2).toString());
});

// Sempre executa, pois não tem parâmetro nenhum
// app.use((req, res) => {
//   res.send("<h1>Aula 02 de Node.js</h1></br></br><p>teste</p>");
//   console.log("Calma pessoal...");
// });

app.listen(3000, () => {
  console.log("Porta 3000 OK");
});
