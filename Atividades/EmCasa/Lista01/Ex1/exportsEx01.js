// Função para contar vogais
function contarVogais(str) {
  const vogais = "aeiouAEIOU";
  let contador = 0;

  // Loop através de cada caractere da string
  for (let char of str) {
    if (vogais.includes(char)) {
      contador++;
    }
  }
  return contador;
}

module.exports = { contarVogais };
