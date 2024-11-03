// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  const arrayNoIntervalo = [];
  let contador = 0;

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (num >= inicio && num <= fim) {
      arrayNoIntervalo.push(num);
      contador++;
      }
  }

  return {
    arrayNoIntervalo: arrayNoIntervalo,
    contador: contador
  };
}

module.exports = {
  getArrayNoIntervalo
}