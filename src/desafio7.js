// Desafio 7
function taxesCalcul(grossSalary) {
let inss = 0;
if (grossSalary <= 1556.94) {
    inss = grossSalary * (8/100)
} else if ((grossSalary >= 1556.95)&&(grossSalary <= 2594.92)) {
    inss = grossSalary * (9/100)
} else if ((grossSalary >= 2594.93)&&(grossSalary <= 5189.82)) {
    inss = grossSalary * (11/100)
} else { 
    inss = 570.88
}
let baseSalary = grossSalary - inss;
let valorIr = 0;
if (baseSalary <= 1903.98) {
    valorIr = 0
} else if ((baseSalary >= 1903.99)&&(baseSalary <= 2826.65)) {
    valorIr = (baseSalary * (7.5/100)) - 142.80
} else if ((baseSalary >= 2826.66)&&(baseSalary <= 3715.05)) {
    valorIr = (baseSalary * (15/100)) - 354.80
} else if ((baseSalary >= 3751.06)&&(baseSalary <= 4664.68)) {
    valorIr = (baseSalary * (22.5/100)) - 636.13
} else {
    valorIr = (baseSalary * (27.5/100)) - 869.36   
}
const netSalary = baseSalary - valorIr;
return (`Salário: R$ ${netSalary}`); 
}

module.exports = {
    taxesCalcul
}