// Desafio 7
function taxesCalcul(grossSalary) {
   
    let salarioLiquido;
    let inss;
    let ir;
    let salarioBase;

   
    if (grossSalary <= 1556.94) {
        inss = grossSalary * 0.08;
    } else if (grossSalary <= 2594.92) {
        inss = grossSalary * 0.09;
    } else if (grossSalary <= 5189.82) {
        inss = grossSalary * 0.11;
    } else {
        inss = 570.88;
    }


    salarioBase = grossSalary - inss;


   
    if (salarioBase <= 1903.98) {
        ir = 0;
    } else if (salarioBase <= 2826.65) {
        ir = (salarioBase * 0.075) - 142.80;
    } else if (salarioBase <= 3751.05) {
        ir = (salarioBase * 0.15) - 354.80;
    } else if (salarioBase <= 4664.68) {
        ir = (salarioBase * 0.225) - 636.13;
    } else {
        ir = (salarioBase * 0.275) - 869.36;
    }

    
    salarioLiquido = salarioBase - ir;

    return (`Salário: R$ ${salarioLiquido}`);
} 

 

console.log(taxesCalcul(2000)); 
console.log(taxesCalcul(3000));
console.log(taxesCalcul(4000));
console.log(taxesCalcul(0)); 
console.log(taxesCalcul(1045));

module.exports = {
    taxesCalcul
}