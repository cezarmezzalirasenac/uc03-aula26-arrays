const { questionFloat } = require('readline-sync')
const { imprimeValoresParcela } = require('./function-utils')

const valorDivida = questionFloat('Informe o valor da dívida: ')

let propsParcelas = [
  {
    numParcelas: 1,
    percentualJuros: 0,
  },
  {
    numParcelas: 3,
    percentualJuros: 10,
  },
  {
    numParcelas: 6,
    percentualJuros: 15,
  },
  {
    numParcelas: 9,
    percentualJuros: 20,
  },
  {
    numParcelas: 12,
    percentualJuros: 25,
  },
];

// const primeiroItem = propsParcelas[0]

// console.log(primeiroItem)

for (let i = 0; i < propsParcelas.length; i++) {
  const props = propsParcelas[i];
  imprimeValoresParcela(valorDivida, props.numParcelas, props.percentualJuros)
}