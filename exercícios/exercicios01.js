// Exercícios de JavaScript - Variáveis e Operações Básicas

// 1 - Crie uma variável e exiba o valor dessa variável no terminal.
let profissão = "Estudante";

console.log(profissão);

// 2 - Crie uma variável do tipo inteiro e exiba o tipo da variável no terminal.
const idade = 31;

console.log(idade);
// 3 - Crie uma variavel para o nome e uma para o sobrenome de uma pessoa e exiba o nome completo no terminal.
const nome = "Naiara";
const sobrenome = "Cristina";
console.log(nome, sobrenome);
// 4 - Crie um programa que recebe dois valores e imprime no terminal a soma dos valores informados.
const n1 = 3;
const n2 = 8;
console.log("Resultado:", n1 + n2);
// 5 - Crie um programa que recebe dois valores e imprime no terminal a divisão dos valores informados.
const n3 = 10;
const n4 = 18;

const divisão = (n3 + n4) / 2;
console.log("divisão:", divisão);
// 6 - Crie um programa que recebe três numeros, calcula a média dos três valores e exibe a média no terminal com a mensagem: 'A média dos valores informados é: ' juntamente com o valor da média.
const a = 33;
const b = 25;
const c = 40;

const media = (a + b + c) / 3;
console.log("media:", media);

// 7 - Em uma loja, um produto custa um determinado valor e o cliente pagou com
//     uma certa quantia em dinheiro. Crie variáveis para o preço do produto e
//     para o valor pago, calcule o troco e exiba no terminal a mensagem:
//     'O troco é: ' juntamente com o valor do troco.

const compra = 73;
const recebido = 100;

const troco = recebido - compra;
console.log("troco:", troco);
// 8 - Um aluno fez duas provas e quer saber sua média ponderada, onde a primeira
//     prova tem peso 2 e a segunda tem peso 3. Crie variáveis para as notas,
//     calcule a média ponderada e exiba no terminal a mensagem:
//     'A média ponderada do aluno é: ' juntamente com o valor calculado.
const prova1 = 6 * 2;
const prova2 = 4 * 3;

const mediaProva = (prova1 + prova2) / 2;
console.log("A média ponderada do aluno é:", mediaProva);

// 9 - Um carro percorreu uma certa distância em um determinado tempo.
//     Crie variáveis para a distância (em km) e o tempo (em horas), calcule a
//     velocidade média e exiba no terminal a mensagem:
//     'A velocidade média do veículo foi de: ' juntamente com o valor em km/h.
let distanciaKm = 580;
let tempoHoras = 8;

let Velocidademedia = distanciaKm / tempoHoras;
console.log("A velocidade média do veículo foi de:", Velocidademedia);

// 10 - Uma pessoa recebe um salário mensal e teve um aumento de 15%.
//      Crie variáveis para o nome da pessoa e o salário atual, calcule o novo
//      salário com o aumento e exiba no terminal a mensagem:
//      'O novo salário de [nome] é: ' juntamente com o valor reajustado.
let Nome = "Pitterson";
let salário = 1.958;
let aumento = salário * 0.15;
let salárioNovo = salário + aumento;

console.log(`O novo salário de ${nome} é ${salárioNovo.toFixed(3)}`);
