const express = require("express");
const app = express();

// Rota para contar as vogais
const exportsEx01 = require("./exportsEx01");

app.get("/contar-vogais", (req, res) => {
  const { palavra } = req.query; // A palavra sera passada como parametro de query

  if (!palavra) {
    return res.status(400).send("Por favor, forneça uma palavra.");
  }

  const numeroDeVogais = exportsEx01.contarVogais(palavra);
  res.send(`A palavra "${palavra}" contém ${numeroDeVogais} vogais.`);
});

// Configura o servidor para rodar na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Para rodar o projeto, utilize os comando abaixo:
// Utilize "npm i express" para baixar o "node_modules" dentro da pasta "Ex1".
// Utilize "npm i --save-dev nodemon" para ativar o pacote "nodemon" (precisa da versao 18+ do nvm).
// Utilize "npm start" para comecar o projeto (ja esta configurado no arquivo package.json).

// Agora acesse o link abaixo para encontrar a contagem de vogais da palavra que deseja:
// http://localhost:3000/contar-vogais?palavra=Beterraba
