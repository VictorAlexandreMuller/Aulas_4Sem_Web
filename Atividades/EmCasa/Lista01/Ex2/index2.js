// Ex2 - Escreva uma função que informe o
// retorno de um investimento (montante) com
// base nos valores do capital inicial, tempo
// em meses e taxa de juros mensal, fornecidos pelo usuário.

// Use a fórmula: M = C * (1+i)t

// C = Capital inicial investido
// i = Taxa de juros, em percentual
// t = Tempo do investimento, em meses
// Exiba o resultado com duas casas decimais.

// Observação: todas as funções devem ser chamadas no browser por uma requisição GET

const express = require("express");
const app = express();

function calcularMontante(capitalInicial, taxaJurosMensal, tempoMeses) {
  const taxaDecimal = taxaJurosMensal / 100;
  const montante = capitalInicial * Math.pow(1 + taxaDecimal, tempoMeses);
  return montante.toFixed(2);
}

app.get("/calcular-montante", (req, res) => {
  const capitalInicial = parseFloat(req.query.capitalInicial);
  const taxaJurosMensal = parseFloat(req.query.taxaJurosMensal);
  const tempoMeses = parseInt(req.query.tempoMeses);

  if (!capitalInicial || !taxaJurosMensal || !tempoMeses) {
    return res.status(400).send("Faltou informação.");
  }

  const montanteFinal = calcularMontante(
    capitalInicial,
    taxaJurosMensal,
    tempoMeses
  );

  res.send(`O montante final é: R$ ${montanteFinal}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Para rodar o projeto, utilize os comando abaixo:
// Utilize "npm i express" para baixar o "node_modules" dentro da pasta "Ex2".
// Utilize "npm i --save-dev nodemon" para ativar o pacote "nodemon" (precisa da versao 18+ do nvm).
// Utilize "npm start" para comecar o projeto (ja esta configurado no arquivo package.json).

// Agora acesse o link abaixo:
// http://localhost:3000/calcular-montante?capitalInicial=1000&taxaJurosMensal=1&tempoMeses=12
