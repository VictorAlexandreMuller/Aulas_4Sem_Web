// 1. Declare uma variável que pode conter uma string ou um número.
let valor: string | number;

console.log("Resposta do Exercicio 1:");

valor = "Olá";
console.log("Exemplo da variável valor em String: ", valor); // Exemplo de string

valor = 42;
console.log("Exemplo da variável valor em Number: ", valor); // Exemplo de número

// --------------------------------------------------------------------------------------------
console.log("-------------------------------------------------");
// --------------------------------------------------------------------------------------------

// 2. Crie uma função que receba dois números e retorne a soma deles.
function somar(a: number, b: number): number {
  return a + b;
}

console.log("Resposta do Exercicio 2:");

const resultadoSoma = somar(5, 10);
console.log("O resultado da soma dos dois numeros é: ", resultadoSoma); // R: 15

// --------------------------------------------------------------------------------------------
console.log("-------------------------------------------------");
// --------------------------------------------------------------------------------------------

// 3. Crie uma interface para representar uma pessoa com nome e idade, ambos obrigatórios.
interface Pessoa {
  nome: string;
  idade: number;
}

console.log("Resposta do Exercicio 3:");

const pessoa: Pessoa = { nome: "João", idade: 30 };
console.log("Pessoa: ", pessoa); // R: Exibe a pessoa João de 30 anos

// --------------------------------------------------------------------------------------------
console.log("-------------------------------------------------");
// --------------------------------------------------------------------------------------------

// 4. Crie uma classe Animal com um método falar. Depois crie uma classe Cachorro que
// herda de Animal e sobrescreva o método falar para imprimir "Au Au".
class Animal {
  falar(): void {
    console.log("Som de um animal");
  }
}

class Cachorro extends Animal {
  falar(): void {
    console.log("Au Au");
  }
}

console.log("Resposta do Exercicio 4:");

const meuCachorro = new Cachorro();
meuCachorro.falar(); // R: Au Au

// --------------------------------------------------------------------------------------------
console.log("-------------------------------------------------");
// --------------------------------------------------------------------------------------------

// 5. Crie uma função que receba um array de números e retorne o maior valor.
function maiorNumero(numeros: number[]): number {
  return Math.max(...numeros);
}

console.log("Resposta do Exercicio 5:");

const maiorValor = maiorNumero([1, 5, 3, 9, 2]);
console.log("O maior numero da Array eh: ", maiorValor); // R: 9

// --------------------------------------------------------------------------------------------
console.log("-------------------------------------------------");
// --------------------------------------------------------------------------------------------

// 6. Crie um enum para representar as cores: vermelho, verde e azul.
enum Cor {
  Vermelho = "vermelho",
  Verde = "verde",
  Azul = "azul",
}

console.log("Resposta do Exercicio 6:");

console.log("Cor selecionada: ", Cor.Vermelho); // R: Vermelho

// --------------------------------------------------------------------------------------------
console.log("-------------------------------------------------");
// --------------------------------------------------------------------------------------------

// 7. Crie uma função que receba um parâmetro que pode ser uma string ou um número e
// retorne o tamanho (se for string) ou o dobro do valor (se for número).
function processarParametro(param: string | number): number {
  if (typeof param === "string") {
    return param.length;
  } else {
    return param * 2;
  }
}

console.log("Resposta do Exercicio 7:");

const tamanhoString = processarParametro("Hello");
console.log("A String possui ", tamanhoString, "letras."); // R: 5

const dobroNumero = processarParametro(7);
console.log("O dobro do numero eh: ", dobroNumero); // R: 14
