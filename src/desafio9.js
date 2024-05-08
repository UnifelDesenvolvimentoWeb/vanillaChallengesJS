// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  array.sort((a, b) => a - b);

  let cont = 0;
  for (let i = 0; i < array.length; i++) {
      if (array[i] === inicio) {
          cont = i;
          break;
      }
  }

  let contador = 0;
  for (let i = cont; i < array.length; i++) {
      if (array[i] <= fim) {
          contador += 1;
      } else {
          break; // interrompe a contagem se o valor ultrapassar 'fim'
      }
  }

  return { arrayNoIntervalo: array.slice(cont, cont + contador), contador: contador };
}

module.exports = {
  getArrayNoIntervalo
}

  