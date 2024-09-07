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

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
