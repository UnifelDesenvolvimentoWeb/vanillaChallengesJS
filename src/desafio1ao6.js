const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printElements(array) {

  for (let index = 0; index < array.length; index++) {
    console.log(array[index]); 
  } return 'Fim'
} //console.log(printElements(array));

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {

  let maior = array[0];

  for (let index = 0; index < array.length; index++) {
     if (maior < array[index]) {
      maior = array[index];
     }

  } return maior
} //console.log(biggerNumber(array));

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {

  if (array.length < 3) {
    console.log('Tamanho do array inválido');
  }
  for (let index = 1; index < array.length -1 ; index++) {
    console.log(array[index]); 

  }return 'Fim'
}// console.log(ignoreFirstAndLastElement(array));

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {

  const inverterArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    inverterArray.push(array[index]); 
    
  }  return inverterArray;

} //console.log(invertElementsArray(array));

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {

  return string.split('').reverse().join('');

} let string1 = "Maria";
//console.log(invertString(string1));


// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(array) {
  let arraySemDuplicados = []; 

  for (let elemento of array) {

      if (!arraySemDuplicados.includes(elemento)) {
          arraySemDuplicados.push(elemento);
      }
  } return arraySemDuplicados;

} let array1 = [1, 2, 3, 4, 4, 5, 5, 6];
let arraySemDuplicados = noDuplicates(array1);
//console.log(noDuplicates(array1));


module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
