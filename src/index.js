const readline = require('readline-sync')
const { questionFloat } = require('readline-sync')

// receba 4 notas e calcule a média das notas;
// let nota1 = questionFloat("Informe a primeira nota");
// let nota2 = questionFloat("Informe a segunda nota");
// let nota3 = questionFloat("Informe a terceira nota");
// let nota4 = questionFloat("Informe a quarta nota");
// let nota5 = questionFloat("Informe a quinta nota");

// const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

// console.log(`a média das notas é ${media}`);

// arrays ou listas
let notas = [];

for (let i = 1; i <= 5; i++) {
  let nota = questionFloat(`Informe a nota ${i}`);
  notas.push(nota);
}
console.log(notas);

let totalNotas = 0;

for (const nota of notas) {
  console.log(nota)
  totalNotas += nota;
}


const mediaLista = totalNotas / notas.length;

console.log(`a média das notas é ${mediaLista}`)

