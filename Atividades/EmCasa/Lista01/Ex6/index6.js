// 6.	Escreva uma função que simule uma loteria,
// onde o usuário escolhe 6 números e o programa
// sorteia 6 números aleatórios, verificando
// quantos números o usuário acertou.

// Observação: todas as funções devem ser chamadas no browser por uma requisição GET

const express = require("express");
const app = express();

// Função para gerar 6 números aleatórios entre 1 e 50
function gerarNumerosAleatorios() {
  let numeros = [];
  while (numeros.length < 6) {
    let numero = Math.floor(Math.random() * 50) + 1;
    if (!numeros.includes(numero)) {
      numeros.push(numero);
    }
  }
  return numeros;
}

// Função para verificar quantos números o usuário acertou
function verificarAcertos(numerosUsuario, numerosSorteados) {
  return numerosUsuario.filter((num) => numerosSorteados.includes(num));
}

app.get("/loteria", (req, res) => {
  // Recebendo os números do usuário como query parameters (ex: ?n1=1&n2=2&n3=3&n4=4&n5=5&n6=6)
  let numerosUsuario = [
    parseInt(req.query.n1),
    parseInt(req.query.n2),
    parseInt(req.query.n3),
    parseInt(req.query.n4),
    parseInt(req.query.n5),
    parseInt(req.query.n6),
  ];

  // Gerando os números aleatórios
  let numerosSorteados = gerarNumerosAleatorios();

  // Verificando quantos números o usuário acertou
  let acertos = verificarAcertos(numerosUsuario, numerosSorteados);

  // Enviando a resposta ao usuário
  res.json({
    numerosUsuario: numerosUsuario,
    numerosSorteados: numerosSorteados,
    acertos: acertos,
    quantidadeAcertos: acertos.length,
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

// Para rodar o projeto, utilize os comando abaixo:
// Utilize "npm i express" para baixar o "node_modules" dentro da pasta "Ex6".
// Utilize "npm i --save-dev nodemon" para ativar o pacote "nodemon" (precisa da versao 18+ do nvm).
// Utilize "npm start" para comecar o projeto (ja esta configurado no arquivo package.json).

// Agora acesse o link abaixo:
// http://localhost:3000/loteria?n1=5&n2=10&n3=20&n4=25&n5=30&n6=40
