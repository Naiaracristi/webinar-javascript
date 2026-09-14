// Exercícios de Condicionais


// Exercício 1: Escreva um programa que recebe dois números como entrada e imprime o maior deles.
let numero1 = 10
let numero2 = 10


if (numero1 < numero2) {
    console.log(numero2)
    console.log('banana')
} else if (numero2 < numero1){
    console.log(numero1)
} else {
    console.log(`O número ${numero1} e o número ${numero2} são iguais!`)
}




// Exercício 2: Crie um programa que recebe uma string e verifica se a primeira letra é vogal.




// Exercício 3: Escreva um programa que solicita a idade do usuário e determina se ele é elegível para votar (18 anos ou mais).


// Exercício 4: Crie um programa que recebe uma string como entrada e verifica se ela começa com a letra 'A'. Imprima "Começa com A" se for verdadeiro, caso contrário, imprima "Não começa com A".



// Exercício 5: Escreva um programa que solicita ao usuário uma senha. Se a senha for "12345", imprima "Acesso concedido"; caso contrário, imprima "Acesso negado".



// Exercício 6: Crie um programa que determina se um ano dado é bissexto. Um ano bissexto é divisível por 4, mas não é divisível por 100, a menos que também seja divisível por 400.


// Exercício 7: Crie um programa que recebe como entrada a altura, profissão e nome de um individuo e verifica se ele é suspeito de acordo com as seguintes condições:
// Se o nome for Alice e a altura for 169, exiba a mensagem: "Suspeito encontrado"
// Se o nome for Douglas ou Rafael e a profissão começar com a letra C, exiba a mensagem: "Suspeito encontrado"
// Se o nome encontrado for Thiago e a profissão for 'Professor', exiba mensagem: "Suspeito encontrado!"



// Exercício 8: Escreva um programa que recebe um número e verifica se ele é
// positivo, negativo ou zero, exibindo a mensagem correspondente.



// Exercício 9: Crie um programa que recebe a idade de uma pessoa e informa
// sua classificação:
// - Menor que 12: "Criança"
// - De 12 a 17: "Adolescente"
// - De 18 a 59: "Adulto"
// - 60 ou mais: "Idoso"



// Exercício 10: Escreva um programa que solicita dois números e uma operação
// ('+', '-', '*' ou '/'). Realize o cálculo correspondente e exiba o resultado.
// Se a operação for inválida, exiba "Operação inválida".



// Exercício 11: Crie um programa que recebe três números e exibe o maior deles.



// Exercício 12: Escreva um programa que recebe a temperatura em graus Celsius e
// classifica o clima:
// - Abaixo de 15: "Frio"
// - De 15 a 25: "Agradável"
// - Acima de 25: "Quente"



// Exercício 13: Crie um programa que solicita o nome de usuário e a senha.
// Se o usuário for "admin" E a senha for "admin123", exiba "Login bem-sucedido".
// Caso contrário, exiba "Usuário ou senha incorretos".



// Exercício 14: Escreva um programa que recebe a nota de um aluno (0 a 10) e
// informa seu conceito:
// - 9 a 10: "A"
// - 7 a 8.9: "B"
// - 5 a 6.9: "C"
// - 3 a 4.9: "D"
// - Abaixo de 3: "F"
// Notas fora do intervalo 0-10 devem exibir "Nota inválida".



// Exercício 15: Crie um programa que recebe um número inteiro e verifica se ele
// é par ou ímpar, exibindo a mensagem correspondente.



// Exercício 16: Escreva um programa que solicita o valor de três lados e verifica
// se eles formam um triângulo. Para formar um triângulo, cada lado deve ser
// menor que a soma dos outros dois. Se formar, classifique como:
// - Equilátero: todos os lados iguais
// - Isósceles: dois lados iguais
// - Escaleno: todos os lados diferentes
// Caso não forme triângulo, exiba "Os valores não formam um triângulo".



// Exercício 17: Crie um programa que recebe o salário de um funcionário e calcula
// o imposto a pagar conforme a faixa:
// - Até R$ 2000: isento
// - De R$ 2000,01 a R$ 5000: 10% de imposto
// - Acima de R$ 5000: 20% de imposto
// Exiba o valor do imposto a pagar.



// Exercício 18: Escreva um programa que simula um semáforo. Receba uma cor
// ("verde", "amarelo" ou "vermelho") e exiba a ação correspondente:
// - "verde": "Pode avançar"
// - "amarelo": "Atenção, reduza a velocidade"
// - "vermelho": "Pare"
// Qualquer outra cor deve exibir "Cor inválida".



// Exercício 19: Crie um programa que recebe o peso e a altura de uma pessoa,
// calcula o IMC (peso / altura²) e classifica:
// - IMC < 18.5: "Abaixo do peso"
// - IMC entre 18.5 e 24.9: "Peso normal"
// - IMC entre 25 e 29.9: "Sobrepeso"
// - IMC 30 ou mais: "Obesidade"



// Exercício 20: Escreva um programa que recebe três notas de um aluno, calcula
// a média e verifica sua situação:
// - Média >= 7: "Aprovado"
// - Média >= 5 e < 7: "Recuperação"
// - Média < 5: "Reprovado"