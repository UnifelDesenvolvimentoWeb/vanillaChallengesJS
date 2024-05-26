const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printElements(array) {
  const nPrimos= [2,3,5,7,11];
    // Crie o primeiro laço FOR, que percorrerá os
  for(let i= 0; i <= nPrimos.length; i++)
    console.log(nPrimos);
  };
  printElements()
  

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
  let n1Primos= [2,3,5,7,11];
  let maior = 0
  function biggerNumber (){
  for(let i =0;i < n1Primos.length; i++)
    var numero= n1Primos[i];
     if (numero > maior)
    maior = numero;
  }
  biggerNumber()


// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
let n2Primos= [2,3,5,7,11];
function ignoreFirstAndLastElement (){
n2Primos.shift('2') && n2Primos.pop('11')
console.log(n2Primos);
if(n2Primos.length<3)
  console.log("Tamanho do array inválido");  
}
ignoreFirstAndLastElement()


// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
let nPrimos= [2,3,5,7,11];
function invertElementsArray(){
nPrimos.reverse()
// O reverse()método de Array instâncias inverte um array no lugar e retorna a referência ao mesmo array, o primeiro elemento do array agora se tornando o último, e o último elemento do array se tornando o primeiro.
console.log(nPrimos);
}
invertElementsArray()


// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function StringF (Fruta){
  let vazio = ""
  let tamanho = Fruta.length-1
for(let posição = tamanho ;posição >=0; posição-- ) {
solução = vazio + Fruta[posição];
console.log(solução);

}
  }

StringF("Morango");

// Desafio 6
//Crie uma função que retira os elementos duplicados
 
// Implemente a função noDuplicates e escreva um código que receba um array de números por parâmetro e retorne o array com os elementos duplicados removidos.


meuArray=[2,3,4,2,5,3];
function imprimirArray(parametro) {
   const semRepetição = new Set(meuArray) ;
// Set(conjunto) =O objeto Set permite que você armazene valores únicos de qualquer tipo
   const elementosUnicos= Array.from(semRepetição)
// O método from() é utilizado quando queremos criar um array a partir de um objeto que não é um array
   console.log(elementosUnicos);
}
imprimirArray()
