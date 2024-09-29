// 1. Declare uma variável que pode conter uma string ou um número.
let valor: string | number;

// 2. Crie uma função que receba dois números e retorne a soma deles.
function somar(a: number, b: number): number {
  return a + b;
}

// 3. Crie uma interface para representar uma pessoa com nome e idade, ambos obrigatórios.
interface Pessoa {
  nome: string;
  idade: number;
}

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

// 5. Crie uma função que receba um array de números e retorne o maior valor.
function maiorNumero(numeros: number[]): number {
  return Math.max(...numeros);
}

// 6. Crie um enum para representar as cores: vermelho, verde e azul.
enum Cor {
  Vermelho = "vermelho",
  Verde = "verde",
  Azul = "azul",
}

// 7. Crie uma função que receba um parâmetro que pode ser uma string ou um número e
// retorne o tamanho (se for string) ou o dobro do valor (se for número).
function processarParametro(param: string | number): number {
  if (typeof param === "string") {
    return param.length;
  } else {
    return param * 2;
  }
}

// Exemplo de uso das funções e classes:

valor = "Olá";
console.log(valor); // Exemplo de string

valor = 42;
console.log(valor); // Exemplo de número

const resultadoSoma = somar(5, 10);
console.log(resultadoSoma); // Saída: 15

const pessoa: Pessoa = { nome: "João", idade: 30 };
console.log(pessoa); // Exibe a pessoa

const meuCachorro = new Cachorro();
meuCachorro.falar(); // Saída: "Au Au"

const maiorValor = maiorNumero([1, 5, 3, 9, 2]);
console.log(maiorValor); // Saída: 9

console.log(Cor.Vermelho); // Saída: "vermelho"

const tamanhoString = processarParametro("Hello");
console.log(tamanhoString); // Saída: 5

const dobroNumero = processarParametro(7);
console.log(dobroNumero); // Saída: 14
