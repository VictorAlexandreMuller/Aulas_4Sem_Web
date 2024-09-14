// 3.	Escreva uma função em JavaScript que conte
// quantas vezes um caractere aparece em uma string.
// Tanto o caractere quanto a string devem ser fornecidos pelo usuário.

// Observação: todas as funções devem ser chamadas no browser por uma requisição GET

const express = require("express");
const app = express();

app.get("/contar-string", (req, res) => {
  const { letra, palavra } = req.query;

  if (!palavra || !letra) {
    return res.status(400).send("Por favor, forneça uma palavra e uma letra.");
  }

  let contador = 0;

  function contarString(str, letra) {
    // Loop através de cada caractere da string
    str = str.toLowerCase();
    letra = letra.toLowerCase();
    for (let char of str) {
      if (char === letra) {
        contador++;
      }
    }
    return contador;
  }

  const numeroDeStrings = contarString(palavra, letra);

  if (numeroDeStrings == 1) {
    res.send(
      `A palavra "${palavra}" contém ${numeroDeStrings} letra ${letra}.`
    );
  } else if (numeroDeStrings > 1) {
    res.send(
      `A palavra "${palavra}" contém ${numeroDeStrings} letras ${letra}.`
    );
  } else if (numeroDeStrings == 0) {
    res.send(`A palavra "${palavra}" não contém a letra ${letra}.`);
  }
});

// Configura o servidor para rodar na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Para rodar o projeto, utilize os comando abaixo:
// Utilize "npm i express" para baixar o "node_modules" dentro da pasta "Ex3".
// Utilize "npm i --save-dev nodemon" para ativar o pacote "nodemon" (precisa da versao 18+ do nvm).
// Utilize "npm start" para comecar o projeto (ja esta configurado no arquivo package.json).

// Agora acesse o link abaixo:
// http://localhost:3000/contar-string?palavra=Beterraba&letra=v
// http://localhost:3000/contar-string?palavra=Beterraba&letra=b
// http://localhost:3000/contar-string?palavra=Beterraba&letra=t
