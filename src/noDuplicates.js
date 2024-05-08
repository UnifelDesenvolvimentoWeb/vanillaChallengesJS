// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(array) {
  return array.filter((valor, i, self) => {
    return self.indexOf(valor) === i;

  });

}
