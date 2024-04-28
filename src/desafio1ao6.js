
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printElements(array) {
  for (let i = 0; i < array.length; i ++){
    console.log(array[i]);
  }
}

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {
  let maiorNumero = array[0];
  for (let i = 0; i < array.length; i++){
    if (maiorNumero < array[i]) {
      maiorNumero = array[i];
    }
  } return maiorNumero
}

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {
  for (let i = 1; i < array.length - 1; i++){
    console.log(array[i])
  } if (array.length < 3) {
    console.log('Tamanho do array inválido');
  }
}

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {
  let newArray = [];
  for (let i = array.length -1 ; i >= 0; i--){
    newArray.push(array[i])
  }
  return newArray
}
// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {
  let stringInvertida = '';
  for (i = string.length - 1; i >=0; i--){
    stringInvertida += string[i]
  } return stringInvertida
}
// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.

function noDuplicates(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i])
    }
  } return newArray
}

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
