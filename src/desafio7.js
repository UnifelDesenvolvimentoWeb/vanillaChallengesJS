// Desafio 7
function taxesCalcul(grossSalary) {
    let salarioBase = grossSalary;
    let valorIr = 0;
  
    // Calcula o imposto
    if (grossSalary <= 1556.94) {
      salarioBase -= grossSalary * 0.08;
    } else if (grossSalary <= 2594.92) {
      salarioBase -= grossSalary * 0.09;
    } else if (grossSalary <= 5189.82) {
      salarioBase -= grossSalary * 0.11;
    } else {
      salarioBase -= 570.88;
    }
  
    // Calcula o IR
    if (salarioBase <= 1903.98) {
      valorIr = 0;
    } else if (salarioBase <= 2826.65) {
      valorIr = (salarioBase * 7.5 / 100) - 142.80;
    } else if (salarioBase <= 3751.05) {
      valorIr = (salarioBase * 15 / 100) - 354.80;
    } else if (salarioBase <= 4664.68) {
      valorIr = (salarioBase * 22.5 / 100) - 636.13;
    } else {
      valorIr = (salarioBase * 27.5 / 100) - 869.36;
    }
  
    const salarioLiquido = salarioBase - valorIr;
  
    return `Salário: R$ ${salarioLiquido}`;
  }
  
  module.exports = {
    taxesCalcul,
  };
  