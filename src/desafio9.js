// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {

   const indexInicio = array.indexOf(inicio);
   const indexFim = array.indexOf(fim);
   let arrayIntevalo = array.slice(indexInicio,indexFim +1);
   let newArray = [];

  for (let i = 0; i < arrayIntevalo.length; i++)
  if (arrayIntevalo[i] >= inicio && arrayIntevalo[i] <= fim) {
    newArray.push(arrayIntevalo[i])
  } 
    return{
      arrayNoIntervalo: newArray,
      contador: newArray.length,
    };
}

module.exports = {
  getArrayNoIntervalo
}

  