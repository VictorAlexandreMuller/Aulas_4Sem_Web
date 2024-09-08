// 4.	Escreva uma função que recebe um ano e
// retorna uma mensagem dizendo se é bissexto ou não.

// Observação: todas as funções devem ser chamadas no browser por uma requisição GET

const express = require("express");
const app = express();

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} é um ano bissexto.`;
  } else {
    return `${year} não é um ano bissexto.`;
  }
}

app.get("/anoBissexto", (req, res) => {
  const year = parseInt(req.query.ano);

  if (!isNaN(year)) {
    const message = isLeapYear(year);
    res.send(message);
  } else {
    res
      .status(400)
      .send("Por favor, forneça um ano válido. Exemplo: /?ano=2024");
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

// Para rodar o projeto, utilize os comando abaixo:
// Utilize "npm i express" para baixar o "node_modules" dentro da pasta "Ex4".
// Utilize "npm i --save-dev nodemon" para ativar o pacote "nodemon" (precisa da versao 18+ do nvm).
// Utilize "npm start" para comecar o projeto (ja esta configurado no arquivo package.json).

// Agora acesse o link abaixo:
// http://localhost:3000/anoBissexto/?ano=2028
