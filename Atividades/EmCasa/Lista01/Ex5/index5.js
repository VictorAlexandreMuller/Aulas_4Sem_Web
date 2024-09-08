// 5.	Escreva uma função que recebe um array de números e
// uma mensagem dizendo qual é o menor e o maior número.

// Observação: todas as funções devem ser chamadas no browser por uma requisição GET

const express = require("express");
const app = express();

function findMinMax(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return `O menor número é ${min} e o maior número é ${max}.`;
}

app.get("/find-min-max", (req, res) => {
  const numbersParam = req.query.numbers;

  // Verificar se os números foram passados como parâmetro
  if (!numbersParam) {
    return res
      .status(400)
      .send("Você deve fornecer um array de números como parâmetro.");
  }

  // Converter os números em um array de inteiros
  const numbers = numbersParam.split(",").map(Number);

  // Verificar se todos os valores são números válidos
  if (numbers.some(isNaN)) {
    return res
      .status(400)
      .send("Certifique-se de que todos os valores são números válidos.");
  }

  // Chamar a função e enviar a resposta
  const resultMessage = findMinMax(numbers);
  res.send(resultMessage);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

// Para rodar o projeto, utilize os comando abaixo:
// Utilize "npm i express" para baixar o "node_modules" dentro da pasta "Ex5".
// Utilize "npm i --save-dev nodemon" para ativar o pacote "nodemon" (precisa da versao 18+ do nvm).
// Utilize "npm start" para comecar o projeto (ja esta configurado no arquivo package.json).

// Agora acesse o link abaixo:
// http://localhost:3000/find-min-max?numbers=10,3,56,23,-5,8
