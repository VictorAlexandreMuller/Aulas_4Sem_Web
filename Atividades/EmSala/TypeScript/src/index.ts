//tipagem por inferência
let nome = "Edson";
nome = "João";
let numero1 = 10;
let valido = true;

//tipagem explícita ou por notação
//tipos primitivos - string, number, boolean
let nome1: string = "Edson";
let numero2: number = 10;
let valido1: boolean = true;
console.log(nome, nome1);

//tipo objeto
//array
let frutas: string[] = ["maçã", "banana", "uva"];
let numeros = [1, 2, 3];
console.log(frutas.length);
console.log(frutas[0].toLocaleUpperCase());

//tuplas
let teste: [string, number, boolean] = ["Edson", 37, true];

//objetos literais
let carro: { nome: string; ano: number; preco: number } = {
  nome: "Civic",
  ano: 2019,
  preco: 90000,
};
console.log(carro);
console.log(carro.nome);
carro = {
  nome: "Corolla",
  ano: 2020,
  preco: 100000,
};
//tipo any
let valor: any = 10;
valor = "Edson";
valor = true;

//union type
let valor1: string | number;
valor1 = 10;
valor1 = "Edson";

//type alias
type id = string | number;
let idUsuario: id;
idUsuario = 10;
idUsuario = "Edson";

//enum
enum size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}
let camisa = {
  nome: "Polo",
  tamanho: size.M,
};
console.log(camisa);

//funções
function soma(a: number, b: number): number {
  return a + b;
}
console.log("Resultado: " + soma(10, 20));

//valor opcional
function subtracao(a: number, b?: number): string {
  return b ? "Resultado: " + (a - b) : "Informe o segundo valor";
}
console.log(subtracao(10));
console.log(subtracao(10, 5));

//interface
interface doisNumeros {
  a: number;
  b: number;
}
let x: doisNumeros = { a: 10, b: 20 };

function multiplicacao(numeros: doisNumeros): number {
  return numeros.a * numeros.b;
}
console.log("Resultado: " + multiplicacao(x));
console.log("Resultado2: " + multiplicacao({ a: 2, b: 3 }));

//interface para Pessoa
interface IPessoa {
  nome: string;
  idade: number;
  email: string;
  exibir(): string;
  falar(): string;
}

//classes
class Pessoa implements IPessoa {
  nome: string;
  idade: number;
  email: string;
  constructor(nome: string, idade: number, email: string) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }
  exibir() {
    return `Nome: ${this.nome} - Idade: ${this.idade}`;
  }
  falar() {
    return `Meu nome é ${this.nome}`;
  }
}
let pessoa = new Pessoa("Edson", 42, "edson.feitosa@facens.br");
console.log(pessoa.exibir());
console.log(pessoa.falar());
