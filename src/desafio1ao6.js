const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printElements(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {
  let maior = array[0];
  for (let i = 0; i < array.length; i++) {
    if(array[i] > maior){
      maior = array[i];
    }
  }
 return maior;
}

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {
  if (array.length <= 2) {
    console.log("Tamanho do array inválido");
    return;
  }

  for (let i = 1; i < array.length - 1; i++) {
    console.log(array[i]);
  }
}

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {
  const novoArray = [];
  let i = array.length - 1;
  while (i >= 0) {
    novoArray.push(array[i]);
    i--;
  }
  return novoArray;
}

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {
  let novaString = "";
  //String.length -1 corresponde ao último caractere da string e assim como no exemplo anterior vamos invertendo e somando na nova string
  for (let i = string.length - 1; i >= 0; i--) {
    novaString += string[i];
  }
  return novaString;
}

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(array) {
  let novoArray = [];
  for (let i = 0; i < array.length; i++) {
    let jaExiste = false;
    for (let j = 0; j < novoArray.length; j++) {
      if (array[i] === novoArray[j]) {
        jaExiste = true;
        break;
      }
    }
    if (!jaExiste) {
      novoArray.push(array[i]);
    }
  }
  return novoArray;
}

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
