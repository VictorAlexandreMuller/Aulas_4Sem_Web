const http = require("http");
const url = require("url");

function contarVogais(texto) {
  const vogais = "aeiouAEIOU";
  let contador = 0;

  for (let char of texto) {
    if (vogais.includes(char)) {
      contador++;
    }
  }

  return contador;
}
