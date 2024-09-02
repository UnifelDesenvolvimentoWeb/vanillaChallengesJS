const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printElements(array) {
  array.forEach(element => console.log(element));
}

function biggerNumber(array) {
  console.log(Math.max.apply(null, array));
}

function ignoreFirstAndLastElement(array) {
  array.pop()
  array.shift();
  array.forEach(element => console.log(element));
}

function invertElementsArray(array) {
  array.reverse().forEach(element => console.log(element));
}

function invertString(string) {
  console.log(array.reverse());
}

function noDuplicates(array) {
  let semDuplicados = array.filter((atual, index) => array.indexOf(atual) === index);
  console.log(semDuplicados)
}

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
